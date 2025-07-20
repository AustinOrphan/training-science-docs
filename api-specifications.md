# API Specifications: External Data Sources

## Overview

This document provides comprehensive specifications for integrating external data sources into the training science system. All APIs are designed to enhance training recommendations through real-time environmental, health, and performance data.

---

## 1. Weather and Environmental APIs

### 1.1 OpenWeatherMap API

**Base URL**: `https://api.openweathermap.org/data/2.5`

#### Authentication
```typescript
interface WeatherAuth {
  method: 'API_KEY';
  keyLocation: 'query_parameter';
  parameterName: 'appid';
  required: true;
}
```

#### Current Weather Endpoint
```http
GET /weather?lat={lat}&lon={lon}&appid={API_key}&units=metric
```

**Response Schema**:
```typescript
interface CurrentWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;          // Celsius
    feels_like: number;    // Celsius
    temp_min: number;      // Celsius
    temp_max: number;      // Celsius
    pressure: number;      // hPa
    humidity: number;      // %
    sea_level?: number;    // hPa
    grnd_level?: number;   // hPa
  };
  visibility: number;      // meters
  wind: {
    speed: number;         // m/s
    deg: number;          // degrees
    gust?: number;        // m/s
  };
  dt: number;             // Unix timestamp
  sys: {
    sunrise: number;      // Unix timestamp
    sunset: number;       // Unix timestamp
  };
  timezone: number;       // Shift in seconds from UTC
  name: string;           // City name
}
```

**Rate Limits**: 1,000 calls/day (free tier), 60 calls/minute

**Error Handling**:
```typescript
interface WeatherAPIError {
  cod: number;            // HTTP status code
  message: string;        // Error description
}

// Common error codes:
// 401: Invalid API key
// 404: City not found
// 429: Rate limit exceeded
// 500: Internal server error
```

#### Air Pollution Endpoint
```http
GET /air_pollution?lat={lat}&lon={lon}&appid={API_key}
```

**Response Schema**:
```typescript
interface AirPollutionResponse {
  coord: {
    lon: number;
    lat: number;
  };
  list: Array<{
    dt: number;           // Unix timestamp
    main: {
      aqi: number;        // Air Quality Index (1-5)
    };
    components: {
      co: number;         // Carbon monoxide (μg/m³)
      no: number;         // Nitric oxide (μg/m³)
      no2: number;        // Nitrogen dioxide (μg/m³)
      o3: number;         // Ozone (μg/m³)
      so2: number;        // Sulphur dioxide (μg/m³)
      pm2_5: number;      // PM2.5 (μg/m³)
      pm10: number;       // PM10 (μg/m³)
      nh3: number;        // Ammonia (μg/m³)
    };
  }>;
}
```

### 1.2 AirNow API (US Air Quality)

**Base URL**: `https://www.airnowapi.org/aq`

#### Authentication
```typescript
interface AirNowAuth {
  method: 'API_KEY';
  keyLocation: 'query_parameter';
  parameterName: 'API_KEY';
  required: true;
}
```

#### Current AQI Endpoint
```http
GET /observation/latLong/current/?format=application/json&latitude={lat}&longitude={lon}&distance={distance}&API_KEY={key}
```

**Response Schema**:
```typescript
interface AirNowResponse {
  DateObserved: string;     // YYYY-MM-DD
  HourObserved: number;     // 0-23
  LocalTimeZone: string;    // e.g., "EST"
  ReportingArea: string;    // Geographic area name
  StateCode: string;        // Two-letter state code
  Latitude: number;
  Longitude: number;
  ParameterName: string;    // "PM2.5", "OZONE", etc.
  AQI: number;             // Air Quality Index value
  Category: {
    Number: number;         // 1-6 (Good to Hazardous)
    Name: string;          // "Good", "Moderate", etc.
  };
}[]
```

**Integration Example**:
```typescript
class EnvironmentalDataService {
  async getTrainingConditions(
    latitude: number, 
    longitude: number
  ): Promise<TrainingEnvironment> {
    const [weather, airQuality] = await Promise.all([
      this.getWeatherData(latitude, longitude),
      this.getAirQuality(latitude, longitude)
    ]);
    
    return {
      temperature: weather.main.temp,
      humidity: weather.main.humidity,
      windSpeed: weather.wind.speed,
      airQualityIndex: airQuality[0]?.AQI || null,
      pm25: this.extractPM25(airQuality),
      trainingRecommendation: this.calculateTrainingAdjustment(weather, airQuality)
    };
  }
  
  private calculateTrainingAdjustment(
    weather: CurrentWeatherResponse, 
    airQuality: AirNowResponse
  ): TrainingAdjustment {
    const heatIndex = this.calculateHeatIndex(weather.main.temp, weather.main.humidity);
    const aqi = airQuality[0]?.AQI || 0;
    
    return {
      intensityMultiplier: this.getIntensityMultiplier(heatIndex, aqi),
      durationMultiplier: this.getDurationMultiplier(heatIndex, aqi),
      hydrationIncrease: this.getHydrationIncrease(heatIndex),
      indoorRecommended: aqi > 100 || heatIndex > 32,
      warningMessage: this.generateWarningMessage(heatIndex, aqi)
    };
  }
}
```

---

## 2. Wearable Device APIs

### 2.1 Garmin Connect IQ API

**Base URL**: `https://connectapi.garmin.com`

#### OAuth 2.0 Authentication
```typescript
interface GarminAuth {
  method: 'OAuth2';
  authUrl: 'https://connect.garmin.com/oauthConfirm';
  tokenUrl: 'https://connectapi.garmin.com/oauth-service/oauth/access_token';
  scopes: ['read', 'activity_read', 'profile_read'];
}
```

#### Activities Endpoint
```http
GET /activitylist-service/activities/search/activities?start={start}&limit={limit}
```

**Headers Required**:
```http
Authorization: Bearer {access_token}
Accept: application/json
```

**Response Schema**:
```typescript
interface GarminActivitiesResponse {
  activityList: Array<{
    activityId: number;
    activityName: string;
    description?: string;
    startTimeLocal: string;      // ISO 8601
    startTimeGMT: string;        // ISO 8601
    activityType: {
      typeId: number;
      typeKey: string;           // "running", "cycling", etc.
      parentTypeId: number;
    };
    distance: number;            // meters
    duration: number;            // seconds
    elapsedDuration: number;     // seconds
    movingDuration: number;      // seconds
    elevationGain: number;       // meters
    elevationLoss: number;       // meters
    averageSpeed: number;        // m/s
    maxSpeed: number;           // m/s
    startLatitude: number;
    startLongitude: number;
    hasPolyline: boolean;
    ownerId: number;
    ownerDisplayName: string;
    calories: number;
    averageHR: number;          // bpm
    maxHR: number;              // bpm
    averageRunningCadenceInStepsPerMinute?: number;
    maxRunningCadenceInStepsPerMinute?: number;
    steps?: number;
    avgPower?: number;          // watts
    maxPower?: number;          // watts
    normalizedPower?: number;   // watts
    trainingStressScore?: number;
    intensityFactor?: number;
    avgGroundContactTime?: number;    // milliseconds
    avgStrideLength?: number;         // meters
    avgVerticalOscillation?: number;  // centimeters
    avgGroundContactBalance?: number; // percentage
  }>;
}
```

### 2.2 Apple HealthKit Integration

**Note**: HealthKit is iOS-only and requires native app integration, not REST API.

#### Required Capabilities
```typescript
interface HealthKitPermissions {
  read: [
    'HKQuantityTypeIdentifierHeartRate',
    'HKQuantityTypeIdentifierDistanceWalkingRunning',
    'HKQuantityTypeIdentifierActiveEnergyBurned',
    'HKQuantityTypeIdentifierBasalEnergyBurned',
    'HKQuantityTypeIdentifierStepCount',
    'HKQuantityTypeIdentifierHeight',
    'HKQuantityTypeIdentifierBodyMass',
    'HKQuantityTypeIdentifierRestingHeartRate',
    'HKQuantityTypeIdentifierWalkingHeartRateAverage',
    'HKCategoryTypeIdentifierSleepAnalysis',
    'HKCategoryTypeIdentifierMenstrualFlow'  // For female athletes
  ];
  write: [
    'HKWorkoutTypeIdentifier'
  ];
}
```

#### Data Structure
```typescript
interface HealthKitWorkout {
  workoutActivityType: string;    // HKWorkoutActivityTypeRunning
  startDate: Date;
  endDate: Date;
  duration: number;               // seconds
  totalEnergyBurned?: number;     // kcal
  totalDistance?: number;         // meters
  metadata?: {
    HKAverageHeartRate?: number;
    HKMaximumHeartRate?: number;
    HKWeatherTemperature?: number;
    HKWeatherHumidity?: number;
  };
  heartRateSamples?: Array<{
    value: number;                // bpm
    startDate: Date;
    endDate: Date;
  }>;
}
```

### 2.3 Strava API

**Base URL**: `https://www.strava.com/api/v3`

#### OAuth 2.0 Authentication
```typescript
interface StravaAuth {
  method: 'OAuth2';
  authUrl: 'https://www.strava.com/oauth/authorize';
  tokenUrl: 'https://www.strava.com/oauth/token';
  scopes: ['read', 'activity:read', 'profile:read_all'];
  redirectUri: string;
}
```

#### Activities Endpoint
```http
GET /athlete/activities?before={timestamp}&after={timestamp}&page={page}&per_page={per_page}
```

**Response Schema**:
```typescript
interface StravaActivity {
  resource_state: number;
  athlete: {
    id: number;
    resource_state: number;
  };
  name: string;
  distance: number;               // meters
  moving_time: number;            // seconds
  elapsed_time: number;           // seconds
  total_elevation_gain: number;   // meters
  type: string;                   // "Run", "Ride", etc.
  sport_type: string;             // "Run", "TrailRun", etc.
  id: number;
  start_date: string;             // ISO 8601
  start_date_local: string;       // ISO 8601
  timezone: string;
  utc_offset: number;
  location_city?: string;
  location_state?: string;
  location_country?: string;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  visibility: string;
  flagged: boolean;
  gear_id?: string;
  start_latlng?: [number, number];
  end_latlng?: [number, number];
  average_speed: number;          // m/s
  max_speed: number;              // m/s
  average_cadence?: number;       // rpm
  average_watts?: number;
  weighted_average_watts?: number;
  kilojoules?: number;
  device_watts?: boolean;
  has_heartrate: boolean;
  average_heartrate?: number;     // bpm
  max_heartrate?: number;         // bpm
  heartrate_opt_out?: boolean;
  display_hide_heartrate_option?: boolean;
  elev_high?: number;            // meters
  elev_low?: number;             // meters
  upload_id?: number;
  upload_id_str?: string;
  external_id?: string;
  from_accepted_tag?: boolean;
  pr_count: number;
  total_photo_count: number;
  has_kudoed: boolean;
  suffer_score?: number;
}
```

**Rate Limits**: 
- 15 minute: 100 requests
- Daily: 1,000 requests
- Rate limit headers: `X-RateLimit-Limit`, `X-RateLimit-Usage`

---

## 3. Health and Biometric APIs

### 3.1 Oura Ring API

**Base URL**: `https://api.ouraring.com/v2`

#### Authentication
```typescript
interface OuraAuth {
  method: 'Personal_Access_Token';
  headerName: 'Authorization';
  headerValue: 'Bearer {token}';
}
```

#### Sleep Data Endpoint
```http
GET /usercollection/sleep?start_date={YYYY-MM-DD}&end_date={YYYY-MM-DD}
```

**Response Schema**:
```typescript
interface OuraSleepResponse {
  data: Array<{
    id: string;
    day: string;                    // YYYY-MM-DD
    score: number;                  // 1-100
    timestamp: string;              // ISO 8601
    bedtime_end: string;           // ISO 8601
    bedtime_start: string;         // ISO 8601
    duration: number;              // seconds
    efficiency: number;            // percentage
    latency: number;               // seconds to fall asleep
    awake_time: number;            // seconds
    deep_sleep_duration: number;   // seconds
    light_sleep_duration: number;  // seconds
    rem_sleep_duration: number;    // seconds
    restfulness: number;           // 1-100
    timing: number;                // 1-100, consistency score
    total_sleep_duration: number;  // seconds
  }>;
  next_token?: string;
}
```

#### Heart Rate Variability (HRV) Endpoint
```http
GET /usercollection/heartrate?start_datetime={ISO8601}&end_datetime={ISO8601}
```

**Response Schema**:
```typescript
interface OuraHRVResponse {
  data: Array<{
    timestamp: string;             // ISO 8601
    heart_rate: number;            // bpm
    source: string;                // "sleep", "workout", etc.
  }>;
  next_token?: string;
}
```

### 3.2 WHOOP API

**Base URL**: `https://api.prod.whoop.com/developer`

#### OAuth 2.0 Authentication
```typescript
interface WhoopAuth {
  method: 'OAuth2';
  authUrl: 'https://api.prod.whoop.com/oauth/oauth2/auth';
  tokenUrl: 'https://api.prod.whoop.com/oauth/oauth2/token';
  scopes: ['read:recovery', 'read:sleep', 'read:workout', 'read:profile'];
}
```

#### Recovery Data Endpoint
```http
GET /v1/recovery?start={ISO8601}&end={ISO8601}&nextToken={token}
```

**Response Schema**:
```typescript
interface WhoopRecoveryResponse {
  records: Array<{
    cycle_id: number;
    sleep_id: number;
    user_id: number;
    created_at: string;            // ISO 8601
    updated_at: string;            // ISO 8601
    score: {
      user_calibrating: boolean;
      recovery_score: number;      // 0-100
      resting_heart_rate: number;  // bpm
      hrv_rmssd_milli: number;     // milliseconds
      spo2_percentage: number;     // percentage
      skin_temp_celsius: number;   // celsius
    };
  }>;
  next_token?: string;
}
```

#### Workout Data Endpoint
```http
GET /v1/activity/workout?start={ISO8601}&end={ISO8601}
```

**Response Schema**:
```typescript
interface WhoopWorkoutResponse {
  records: Array<{
    id: number;
    user_id: number;
    created_at: string;            // ISO 8601
    updated_at: string;            // ISO 8601
    start: string;                 // ISO 8601
    end: string;                   // ISO 8601
    timezone_offset: string;
    sport_id: number;
    score: {
      strain: number;              // 0-21
      average_heart_rate: number;  // bpm
      max_heart_rate: number;      // bpm
      kilojoule: number;
      percent_recorded: number;    // percentage
      distance_meter: number;
      altitude_gain_meter: number;
      altitude_change_meter: number;
      zone_duration: {
        zone_zero_milli: number;
        zone_one_milli: number;
        zone_two_milli: number;
        zone_three_milli: number;
        zone_four_milli: number;
        zone_five_milli: number;
      };
    };
  }>;
  next_token?: string;
}
```

---

## 4. Integration Architecture

### 4.1 Data Service Layer

```typescript
interface DataServiceConfig {
  retryAttempts: number;
  timeoutMs: number;
  rateLimitBuffer: number;        // percentage buffer for rate limits
  cacheExpiry: number;           // seconds
  fallbackEnabled: boolean;
}

class ExternalDataService {
  private config: DataServiceConfig;
  private cache: Map<string, CachedData>;
  private rateLimiters: Map<string, RateLimiter>;
  
  constructor(config: DataServiceConfig) {
    this.config = config;
    this.cache = new Map();
    this.rateLimiters = new Map();
  }
  
  async fetchWithRetry<T>(
    apiCall: () => Promise<T>,
    serviceName: string
  ): Promise<T> {
    const rateLimiter = this.rateLimiters.get(serviceName);
    
    if (rateLimiter && !rateLimiter.canMakeRequest()) {
      throw new Error(`Rate limit exceeded for ${serviceName}`);
    }
    
    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      try {
        const result = await Promise.race([
          apiCall(),
          this.timeout(this.config.timeoutMs)
        ]);
        
        return result;
      } catch (error) {
        if (attempt === this.config.retryAttempts) {
          throw error;
        }
        
        const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
        await this.sleep(delay);
      }
    }
    
    throw new Error('Max retry attempts exceeded');
  }
  
  private timeout(ms: number): Promise<never> {
    return new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Request timeout')), ms)
    );
  }
  
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
```

### 4.2 Data Validation and Normalization

```typescript
interface DataValidator {
  validate(data: unknown): ValidationResult;
  normalize(data: unknown): NormalizedData;
}

class WeatherDataValidator implements DataValidator {
  validate(data: unknown): ValidationResult {
    const schema = {
      temperature: { type: 'number', min: -50, max: 60 },
      humidity: { type: 'number', min: 0, max: 100 },
      windSpeed: { type: 'number', min: 0, max: 100 },
      pressure: { type: 'number', min: 800, max: 1200 }
    };
    
    return this.validateAgainstSchema(data, schema);
  }
  
  normalize(data: CurrentWeatherResponse): NormalizedWeatherData {
    return {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      windDirection: data.wind.deg,
      pressure: data.main.pressure,
      visibility: data.visibility / 1000, // Convert to km
      uvIndex: null, // Not available in basic plan
      timestamp: new Date(data.dt * 1000),
      location: {
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        name: data.name
      }
    };
  }
}
```

### 4.3 Error Handling Strategy

```typescript
enum APIErrorType {
  AUTHENTICATION = 'auth_error',
  RATE_LIMIT = 'rate_limit',
  NETWORK = 'network_error',
  VALIDATION = 'validation_error',
  SERVICE_UNAVAILABLE = 'service_unavailable'
}

interface APIError {
  type: APIErrorType;
  message: string;
  serviceName: string;
  timestamp: Date;
  retryable: boolean;
  retryAfter?: number; // seconds
}

class APIErrorHandler {
  handleError(error: unknown, serviceName: string): APIError {
    if (error instanceof Error && error.message.includes('rate limit')) {
      return {
        type: APIErrorType.RATE_LIMIT,
        message: 'API rate limit exceeded',
        serviceName,
        timestamp: new Date(),
        retryable: true,
        retryAfter: 3600 // 1 hour
      };
    }
    
    if (error instanceof Error && error.message.includes('401')) {
      return {
        type: APIErrorType.AUTHENTICATION,
        message: 'Authentication failed',
        serviceName,
        timestamp: new Date(),
        retryable: false
      };
    }
    
    // Default to network error
    return {
      type: APIErrorType.NETWORK,
      message: error instanceof Error ? error.message : 'Unknown error',
      serviceName,
      timestamp: new Date(),
      retryable: true
    };
  }
}
```

---

## 5. Security and Privacy

### 5.1 API Key Management

```typescript
interface APIKeyConfig {
  serviceName: string;
  keyType: 'api_key' | 'bearer_token' | 'oauth2';
  rotationRequired: boolean;
  expirationDays?: number;
  environment: 'development' | 'staging' | 'production';
}

class SecureAPIKeyManager {
  private keys: Map<string, EncryptedAPIKey>;
  
  async getAPIKey(serviceName: string): Promise<string> {
    const encryptedKey = this.keys.get(serviceName);
    if (!encryptedKey) {
      throw new Error(`No API key found for ${serviceName}`);
    }
    
    return await this.decrypt(encryptedKey);
  }
  
  async rotateAPIKey(serviceName: string, newKey: string): Promise<void> {
    const encryptedKey = await this.encrypt(newKey);
    this.keys.set(serviceName, encryptedKey);
    
    // Log rotation for audit trail
    await this.auditLog.logKeyRotation(serviceName, new Date());
  }
  
  private async encrypt(value: string): Promise<EncryptedAPIKey> {
    // Implementation depends on chosen encryption method
    // Should use strong encryption (AES-256) with proper key management
  }
  
  private async decrypt(encryptedKey: EncryptedAPIKey): Promise<string> {
    // Decrypt using the same method as encrypt
  }
}
```

### 5.2 Data Privacy Compliance

```typescript
interface PrivacyConfig {
  dataRetentionDays: number;
  anonymizationRequired: boolean;
  consentRequired: boolean;
  allowedRegions: string[];
  gdprCompliant: boolean;
  ccpaCompliant: boolean;
}

class PrivacyManager {
  private config: PrivacyConfig;
  
  constructor(config: PrivacyConfig) {
    this.config = config;
  }
  
  async processUserData(
    userData: UserHealthData,
    userConsent: ConsentRecord
  ): Promise<ProcessedUserData> {
    // Validate consent
    if (!this.validateConsent(userConsent)) {
      throw new Error('User consent not valid for data processing');
    }
    
    // Anonymize sensitive data if required
    const processedData = this.config.anonymizationRequired 
      ? await this.anonymizeData(userData)
      : userData;
    
    // Set retention policy
    await this.setRetentionPolicy(processedData, this.config.dataRetentionDays);
    
    return processedData;
  }
  
  private validateConsent(consent: ConsentRecord): boolean {
    return consent.isValid && 
           consent.scopeIncludes('health_data') &&
           !consent.isExpired();
  }
}
```

---

## 6. Testing and Monitoring

### 6.1 API Health Monitoring

```typescript
interface APIHealthCheck {
  serviceName: string;
  endpoint: string;
  method: 'GET' | 'POST';
  expectedStatusCode: number;
  timeoutMs: number;
  intervalSeconds: number;
}

class APIMonitor {
  private healthChecks: APIHealthCheck[];
  private metrics: APIMetrics;
  
  async runHealthCheck(check: APIHealthCheck): Promise<HealthResult> {
    const startTime = Date.now();
    
    try {
      const response = await fetch(check.endpoint, {
        method: check.method,
        timeout: check.timeoutMs
      });
      
      const duration = Date.now() - startTime;
      const isHealthy = response.status === check.expectedStatusCode;
      
      this.metrics.recordHealthCheck(check.serviceName, {
        success: isHealthy,
        duration,
        statusCode: response.status
      });
      
      return {
        serviceName: check.serviceName,
        healthy: isHealthy,
        responseTime: duration,
        statusCode: response.status,
        timestamp: new Date()
      };
    } catch (error) {
      const duration = Date.now() - startTime;
      
      this.metrics.recordHealthCheck(check.serviceName, {
        success: false,
        duration,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      
      return {
        serviceName: check.serviceName,
        healthy: false,
        responseTime: duration,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date()
      };
    }
  }
}
```

### 6.2 Performance Metrics

```typescript
interface APIMetrics {
  serviceName: string;
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  averageResponseTime: number;
  p95ResponseTime: number;
  p99ResponseTime: number;
  errorRate: number;
  lastUpdated: Date;
}

class MetricsCollector {
  private metrics: Map<string, APIMetrics>;
  
  recordAPICall(
    serviceName: string,
    duration: number,
    success: boolean
  ): void {
    const existing = this.metrics.get(serviceName) || this.createEmptyMetrics(serviceName);
    
    existing.totalRequests++;
    if (success) {
      existing.successfulRequests++;
    } else {
      existing.failedRequests++;
    }
    
    existing.errorRate = existing.failedRequests / existing.totalRequests;
    existing.averageResponseTime = this.updateAverage(
      existing.averageResponseTime,
      duration,
      existing.totalRequests
    );
    existing.lastUpdated = new Date();
    
    this.metrics.set(serviceName, existing);
  }
  
  getMetrics(serviceName: string): APIMetrics | null {
    return this.metrics.get(serviceName) || null;
  }
  
  getAllMetrics(): APIMetrics[] {
    return Array.from(this.metrics.values());
  }
}
```

---

## 7. Implementation Guidelines

### 7.1 API Integration Checklist

**Pre-Integration**:
- [ ] Obtain API credentials/keys
- [ ] Review rate limits and pricing
- [ ] Test API endpoints in development
- [ ] Implement authentication flow
- [ ] Set up error handling
- [ ] Configure monitoring and alerting

**During Integration**:
- [ ] Implement data validation
- [ ] Add caching layer
- [ ] Set up retry logic with exponential backoff
- [ ] Implement circuit breaker pattern
- [ ] Add comprehensive logging
- [ ] Create integration tests

**Post-Integration**:
- [ ] Monitor API performance and reliability
- [ ] Set up alerting for API failures
- [ ] Document API integration and maintenance procedures
- [ ] Regular health checks and monitoring
- [ ] Plan for API version updates

### 7.2 Best Practices

1. **Rate Limiting**: Always respect API rate limits and implement backoff strategies
2. **Caching**: Cache responses when appropriate to reduce API calls
3. **Error Handling**: Implement comprehensive error handling with user-friendly messages
4. **Monitoring**: Monitor API health, performance, and error rates
5. **Security**: Secure API keys and implement proper authentication
6. **Documentation**: Keep API integration documentation up to date
7. **Testing**: Implement thorough testing including error scenarios
8. **Fallbacks**: Have fallback strategies when APIs are unavailable

---

*This API specification provides the foundation for integrating external data sources into the training science system. Regular updates will be needed as APIs evolve and new services are integrated.*

**Document Version**: 1.0  
**Last Updated**: July 2025  
**Next Review**: October 2025