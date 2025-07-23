# Population-Specific Training Guide

## Overview

This guide provides detailed, evidence-based training modifications for three critical populations that require specialized approaches: female athletes, masters athletes (35+), and youth athletes (under 18). Each section includes specific calculations, real-world examples, and implementation guidelines.

---

## 1. Female Athletes Training Guide

### Key Physiological Considerations

Female athletes face unique physiological challenges that significantly impact training response and adaptation. Understanding these differences is crucial for optimizing performance while maintaining long-term health.

### 1.1 Menstrual Cycle Periodization

#### Understanding the Phases

The menstrual cycle typically lasts 21-35 days and consists of four distinct phases, each with unique hormonal profiles that affect training capacity:

**Phase 1: Menstrual Phase (Days 1-5)**
- **Hormones**: Low estrogen and progesterone
- **Training Impact**: 
  - Reduced pain tolerance
  - Potentially lower motivation
  - Normal aerobic capacity
  - May experience cramping and fatigue

**Phase 2: Follicular Phase (Days 6-13)**
- **Hormones**: Rising estrogen, low progesterone
- **Training Impact**:
  - Optimal time for high-intensity training
  - Enhanced recovery capacity
  - Improved insulin sensitivity
  - Better pain tolerance

**Phase 3: Ovulatory Phase (Days 14-16)**
- **Hormones**: Peak estrogen, LH surge
- **Training Impact**:
  - Peak strength and power output
  - Highest injury risk (ACL injuries 3-6x more likely)
  - Optimal performance window
  - Enhanced motivation

**Phase 4: Luteal Phase (Days 17-28)**
- **Hormones**: High progesterone, moderate estrogen
- **Training Impact**:
  - Elevated core body temperature (+0.3-0.5°C)
  - Reduced heat dissipation
  - Increased cardiovascular strain
  - Higher carbohydrate oxidation

#### Practical Training Modifications

```typescript
interface MenstrualCycleTraining {
  phase: MenstrualPhase;
  baselineMetrics: {
    vdot: number;
    weeklyMileage: number;
    typicalIntensityDistribution: IntensityDistribution;
  };
  phaseAdjustments: PhaseSpecificAdjustments;
}

// Example adjustments for a 40 VDOT runner
const menstrualPhaseAdjustments: Record<MenstrualPhase, TrainingAdjustment> = {
  MENSTRUAL: {
    intensityMultiplier: 0.85,      // Reduce intensity targets by 15%
    volumeMultiplier: 0.90,         // Reduce volume by 10%
    recoveryDays: 3,                // Extra recovery day
    focusAreas: ['easy_runs', 'mobility', 'core_strength'],
    nutritionFocus: ['iron_rich_foods', 'anti_inflammatory'],
    hydrationIncrease: 1.1          // 10% more fluids
  },
  FOLLICULAR: {
    intensityMultiplier: 1.05,      // Increase intensity by 5%
    volumeMultiplier: 1.0,          // Normal volume
    recoveryDays: 2,                // Standard recovery
    focusAreas: ['intervals', 'tempo_runs', 'strength_training'],
    nutritionFocus: ['balanced_macros', 'pre_workout_carbs'],
    hydrationIncrease: 1.0          // Normal hydration
  },
  OVULATORY: {
    intensityMultiplier: 1.10,      // Peak performance - 10% increase
    volumeMultiplier: 1.05,         // Slight volume increase safe
    recoveryDays: 2,                // Normal recovery
    focusAreas: ['race_pace', 'time_trials', 'plyometrics'],
    nutritionFocus: ['quality_protein', 'antioxidants'],
    hydrationIncrease: 1.0,         // Normal hydration
    injuryPrevention: 'high_alert'  // Extra warm-up, technique focus
  },
  LUTEAL: {
    intensityMultiplier: 0.95,      // Slight intensity reduction
    volumeMultiplier: 0.95,         // Slight volume reduction
    recoveryDays: 2.5,              // Extra half recovery day
    focusAreas: ['steady_runs', 'heat_acclimation', 'technique'],
    nutritionFocus: ['complex_carbs', 'magnesium', 'b_vitamins'],
    hydrationIncrease: 1.15,        // 15% more fluids (higher temp)
    coolingStrategies: true         // Pre-cooling, during-cooling needed
  }
};
```

#### Real-World Example: Sarah's Marathon Training

Sarah is a 32-year-old runner with a 28-day cycle training for a marathon. Her baseline VDOT is 45.

**Week 1 (Menstrual Phase)**
- Monday: Rest (cramping)
- Tuesday: 6 miles easy (8:45 pace instead of usual 8:15)
- Wednesday: 8 miles easy with 4x100m strides
- Thursday: 5 miles recovery (9:15 pace)
- Friday: Rest
- Saturday: 10 miles easy (8:45 pace)
- Sunday: 60 min aqua jogging (cross-training)
- **Total**: 29 miles (vs. planned 35)

**Week 2 (Follicular Phase)**
- Monday: 8 miles with 6x800m @ 5K pace (3:25 instead of 3:30)
- Tuesday: 6 miles recovery
- Wednesday: 10 miles steady (7:45 pace)
- Thursday: 6 miles easy + strength training
- Friday: Rest
- Saturday: 16 miles long run with 8 @ marathon pace (7:30)
- Sunday: 6 miles recovery
- **Total**: 52 miles (planned 50)

### 1.2 Iron Status Management

#### Understanding Iron Deficiency in Female Athletes

Female athletes face 2-3x higher risk of iron deficiency due to:
- Menstrual blood loss (30-40mg iron/cycle)
- Foot-strike hemolysis from running
- Reduced iron absorption during intense training
- Often inadequate dietary intake

#### Key Biomarkers and Thresholds

```typescript
interface IronStatus {
  ferritin: number;           // ng/mL - stored iron
  hemoglobin: number;         // g/dL - oxygen carrying capacity
  transferrinSaturation: number; // % - iron transport
  hepcidin?: number;          // ng/mL - iron absorption regulator
}

const ironStatusCategories = {
  OPTIMAL: {
    ferritin: { min: 50, max: 200 },
    hemoglobin: { min: 13.5, max: 17 },
    transferrinSaturation: { min: 20, max: 50 },
    trainingImpact: 'none',
    intervention: 'maintain'
  },
  SUBOPTIMAL: {
    ferritin: { min: 30, max: 50 },
    hemoglobin: { min: 12.5, max: 13.5 },
    transferrinSaturation: { min: 16, max: 20 },
    trainingImpact: 'mild_fatigue',
    intervention: 'dietary_focus'
  },
  DEFICIENT: {
    ferritin: { min: 15, max: 30 },
    hemoglobin: { min: 12, max: 12.5 },
    transferrinSaturation: { min: 10, max: 16 },
    trainingImpact: 'significant_impairment',
    intervention: 'supplementation_required'
  },
  SEVERE_DEFICIENCY: {
    ferritin: { min: 0, max: 15 },
    hemoglobin: { min: 0, max: 12 },
    transferrinSaturation: { min: 0, max: 10 },
    trainingImpact: 'training_cessation',
    intervention: 'medical_referral'
  }
};
```

#### Training Modifications by Iron Status

**Case Study: Emma's Iron Recovery Journey**

Emma, 28, elite runner (38 VDOT) diagnosed with iron deficiency:
- Initial ferritin: 18 ng/mL
- Hemoglobin: 11.8 g/dL
- Symptoms: Extreme fatigue, poor recovery, declining performance

**Phase 1: Immediate Modifications (Weeks 1-4)**
```typescript
const ironDeficiencyModifications = {
  week1_2: {
    intensityReduction: 0.30,    // 30% reduction in all intensities
    volumeReduction: 0.40,       // 40% mileage reduction
    noQualityDays: true,         // All easy running
    maxHeartRate: 0.75,          // Keep HR <75% max
    doubleRuns: false            // Single runs only
  },
  week3_4: {
    intensityReduction: 0.20,    // 20% reduction
    volumeReduction: 0.25,       // 25% reduction
    qualityDays: 1,              // One moderate workout weekly
    maxHeartRate: 0.80,          // HR <80% max
    supplementation: {
      elementalIron: 65,         // mg, taken with vitamin C
      timing: 'evening',         // Away from coffee/tea
      withFood: false            // Empty stomach if tolerated
    }
  }
};
```

**Phase 2: Recovery Training (Weeks 5-12)**
- Gradual return to normal training as ferritin rises
- Weekly blood tests to monitor progress
- Adjusted nutrition plan with 18-20mg iron daily
- Final ferritin after 12 weeks: 52 ng/mL

### 1.3 Bone Health and RED-S Prevention

#### Understanding Relative Energy Deficiency in Sport (RED-S)

RED-S occurs when energy intake doesn't match training demands, leading to:
- Menstrual dysfunction
- Decreased bone density
- Impaired performance
- Compromised immunity

#### Risk Assessment Tool

```typescript
interface REDSRiskAssessment {
  energyAvailability: number;     // kcal/kg FFM/day
  menstrualStatus: MenstrualStatus;
  boneDensity?: BoneDensityScore;
  dietaryBehaviors: DietaryRiskFactors[];
  trainingVolume: number;         // hours/week
}

enum MenstrualStatus {
  EUMENORRHEIC = 'regular_cycles',
  OLIGOMENORRHEIC = 'irregular_cycles',
  AMENORRHEIC = 'no_cycles'
}

function calculateREDSRisk(assessment: REDSRiskAssessment): RiskLevel {
  let riskScore = 0;
  
  // Energy availability (<30 kcal/kg FFM/day is threshold)
  if (assessment.energyAvailability < 30) riskScore += 3;
  else if (assessment.energyAvailability < 45) riskScore += 1;
  
  // Menstrual status
  if (assessment.menstrualStatus === MenstrualStatus.AMENORRHEIC) riskScore += 3;
  else if (assessment.menstrualStatus === MenstrualStatus.OLIGOMENORRHEIC) riskScore += 2;
  
  // Training volume
  if (assessment.trainingVolume > 15) riskScore += 2;
  else if (assessment.trainingVolume > 10) riskScore += 1;
  
  // Determine risk level
  if (riskScore >= 6) return 'HIGH_RISK';
  else if (riskScore >= 3) return 'MODERATE_RISK';
  else return 'LOW_RISK';
}
```

#### Practical Interventions

**Case Example: Julia's RED-S Recovery**

Julia, 24, competitive runner experiencing amenorrhea:
- Training: 70 miles/week
- Energy availability: 25 kcal/kg FFM/day
- Last period: 8 months ago
- Bone density: -1.5 Z-score (low for age)

**Intervention Protocol:**
1. **Immediate Changes**
   - Reduce mileage to 45 miles/week
   - Add 500 kcal/day to diet
   - No morning runs (cortisol management)
   - Add rest day mid-week

2. **Nutritional Support**
   - Pre/post workout fueling mandatory
   - 1500mg calcium daily
   - 2000 IU vitamin D daily
   - Work with sports dietitian

3. **Training Modifications**
   ```typescript
   const redsRecoveryPlan = {
     phase1_month1: {
       weeklyMileage: 45,
       intensityDays: 1,      // Only one hard day
       restDays: 2,
       crossTraining: true,   // Low-impact options
       strengthTraining: 2    // Focus on bone loading
     },
     phase2_month2_3: {
       weeklyMileage: 55,
       intensityDays: 2,
       restDays: 1.5,
       monitoringRequired: ['energy_levels', 'mood', 'sleep'],
       menstrualTracking: true
     },
     phase3_month4_6: {
       weeklyMileage: 'gradual_return',  // 5% weekly increases
       intensityDays: 'as_tolerated',
       targetEnergyAvailability: 45      // kcal/kg FFM/day
     }
   };
   ```

### 1.4 Female-Specific VDOT Calculations

Research shows female athletes may have different lactate threshold relationships than males, requiring adjusted calculations:

```typescript
function calculateFemaleVDOT(
  raceTime: number, 
  raceDistance: number,
  menstrualPhase?: MenstrualPhase,
  ironStatus?: IronStatus
): AdjustedVDOT {
  // Base VDOT calculation
  let baseVDOT = standardVDOTCalculation(raceTime, raceDistance);
  
  // Female-specific adjustment (2-3% lower lactate threshold typically)
  let femaleAdjustedVDOT = baseVDOT * 0.975;
  
  // Menstrual phase adjustment
  if (menstrualPhase) {
    const phaseMultipliers = {
      MENSTRUAL: 0.97,
      FOLLICULAR: 1.02,
      OVULATORY: 1.03,
      LUTEAL: 0.99
    };
    femaleAdjustedVDOT *= phaseMultipliers[menstrualPhase];
  }
  
  // Iron status adjustment
  if (ironStatus && ironStatus.ferritin < 30) {
    const ironReduction = Math.max(0.90, 1 - ((30 - ironStatus.ferritin) * 0.005));
    femaleAdjustedVDOT *= ironReduction;
  }
  
  return {
    baseVDOT,
    adjustedVDOT: femaleAdjustedVDOT,
    trainingPaces: calculateTrainingPaces(femaleAdjustedVDOT),
    confidence: calculateConfidenceInterval(baseVDOT, femaleAdjustedVDOT)
  };
}
```

---

## 2. Masters Athletes Training Guide (35+ Years)

### Understanding Age-Related Changes

Masters athletes face progressive physiological changes that require intelligent training modifications to maintain performance while preventing injury.

### 2.1 Physiological Changes by Decade

#### Ages 35-44: Early Masters
- **VO2max decline**: 0.5-1% per year
- **Muscle mass loss**: 0.5% per year
- **Recovery needs**: 10-15% longer than younger athletes
- **Injury risk**: 20% higher than 20s

#### Ages 45-54: Mid Masters
- **VO2max decline**: 1-1.5% per year
- **Muscle mass loss**: 1% per year
- **Recovery needs**: 25-30% longer
- **Hormonal changes**: Significant for both genders
- **Injury risk**: 40% higher than 20s

#### Ages 55-64: Late Masters
- **VO2max decline**: 1.5-2% per year
- **Muscle mass loss**: 1.5% per year
- **Recovery needs**: 40-50% longer
- **Bone density concerns**: Increased fracture risk
- **Injury risk**: 60% higher than 20s

#### Ages 65+: Senior Masters
- **VO2max decline**: 2%+ per year
- **Muscle mass loss**: 2% per year
- **Recovery needs**: 50-75% longer
- **Balance/coordination**: Decreased proprioception
- **Injury risk**: 80%+ higher than 20s

### 2.2 Age-Adjusted Training Calculations

```typescript
interface MastersAthleteProfile {
  chronologicalAge: number;
  trainingAge: number;        // Years of consistent training
  injuryHistory: Injury[];
  currentVDOT: number;
  healthMetrics: HealthStatus;
}

function calculateMastersTrainingZones(
  athlete: MastersAthleteProfile
): MastersTrainingPlan {
  // Age-graded performance adjustment
  const ageGradeFactor = calculateAgeGradeFactor(athlete.chronologicalAge);
  
  // Recovery time multiplier
  const recoveryMultiplier = calculateRecoveryMultiplier(athlete.chronologicalAge);
  
  // Intensity distribution adjustment
  const intensityDistribution = {
    easy: 0.80 + (athlete.chronologicalAge - 35) * 0.005,      // More easy running
    moderate: 0.15 - (athlete.chronologicalAge - 35) * 0.003,  // Less moderate
    hard: 0.05 - (athlete.chronologicalAge - 35) * 0.002       // Less hard
  };
  
  // Maximum weekly volume (relative to younger self)
  const volumeCapacity = 1.0 - ((athlete.chronologicalAge - 35) * 0.015);
  
  return {
    zones: calculateAgeAdjustedZones(athlete.currentVDOT, ageGradeFactor),
    recoveryProtocol: {
      betweenHardSessions: 72 * recoveryMultiplier,  // hours
      betweenEasySessions: 24 * recoveryMultiplier,
      afterLongRun: 48 * recoveryMultiplier
    },
    intensityDistribution,
    maxWeeklyVolume: athlete.peakWeeklyVolume * volumeCapacity,
    strengthTrainingRequired: athlete.chronologicalAge >= 40
  };
}

// Age-grade factors based on world records
const ageGradeFactors: Record<number, number> = {
  35: 1.000,
  40: 0.976,
  45: 0.942,
  50: 0.901,
  55: 0.855,
  60: 0.805,
  65: 0.752,
  70: 0.697,
  75: 0.639,
  80: 0.580
};
```

### 2.3 Real-World Training Examples

#### Case Study 1: Tom, 42, Former Sub-3 Marathoner

**Background:**
- PR: 2:58 (age 28)
- Current fitness: 3:25 marathon shape
- Training history: 20 years
- Recent injuries: Achilles tendinitis

**Customized Training Plan:**
```typescript
const tomsTrainingPlan = {
  macrocycle: {
    phases: [
      { name: 'Base', weeks: 8, focus: 'aerobic_capacity' },
      { name: 'Build', weeks: 6, focus: 'lactate_threshold' },
      { name: 'Peak', weeks: 4, focus: 'race_specific' },
      { name: 'Taper', weeks: 2, focus: 'recovery' }
    ]
  },
  
  typicalWeek: {
    monday: { type: 'easy', miles: 6, pace: '8:30', extras: ['strength_30min'] },
    tuesday: { 
      type: 'workout', 
      warmup: 2,
      workout: '5x1000m @ 10K pace (4:10)',
      recovery: '2:30 between',
      cooldown: 2,
      notes: 'Modified from 6x1000m due to age'
    },
    wednesday: { type: 'recovery', miles: 5, pace: '9:15' },
    thursday: { type: 'easy', miles: 7, pace: '8:30', extras: ['yoga_20min'] },
    friday: { type: 'rest', extras: ['massage', 'stretching'] },
    saturday: { 
      type: 'long', 
      miles: 16,
      structure: '10 easy (8:45) + 6 @ marathon pace (7:50)',
      notes: 'Reduced from 20 miles for recovery'
    },
    sunday: { type: 'recovery', miles: 4, pace: '9:30' }
  },
  
  modifications: {
    noDoubles: true,              // Single runs only
    extraRecoveryWeek: 'every_3rd_week',
    hillRepeatsOnSoftSurface: true,
    tempoRunsShortened: '20min_max',
    mandatoryStrength: '2x_weekly'
  }
};
```

#### Case Study 2: Maria, 53, New to Running

**Background:**
- Started running at 50
- Current 5K: 28:30
- Goal: First half marathon
- Health: Post-menopausal, osteopenia

**Beginner Masters Plan:**
```typescript
const mariasProgressionPlan = {
  phase1_weeks1_4: {
    frequency: 3,  // days per week
    structure: 'run_walk',
    example: '(2min run + 1min walk) x 8',
    totalTime: 24,  // minutes
    crossTraining: ['swimming', 'cycling'],
    strength: 'bodyweight_2x_week'
  },
  
  phase2_weeks5_8: {
    frequency: 4,
    structure: 'continuous_running',
    weeklyMileage: [12, 14, 16, 12],  // recovery week
    longestRun: [4, 5, 6, 4],
    paceGuidance: 'conversational',
    addedElement: 'strides_1x_week'
  },
  
  phase3_weeks9_16: {
    frequency: 4,
    structure: 'structured_training',
    weeklyMileage: [18, 20, 22, 16, 24, 26, 20, 15],  // taper
    workouts: [
      'tempo_10min',
      'hills_6x30sec',
      'progression_run',
      'race_pace_intervals'
    ],
    halfMarathonGoal: '2:20-2:25'
  },
  
  injuryPrevention: {
    mandatory: [
      'dynamic_warmup',
      'post_run_stretching',
      'foam_rolling',
      'strength_training'
    ],
    supplements: ['vitamin_d', 'calcium', 'omega3'],
    gaitAnalysis: 'recommended'
  }
};
```

### 2.4 Masters-Specific Recovery Protocols

```typescript
interface MastersRecoveryProtocol {
  age: number;
  workoutType: WorkoutType;
  environmentalFactors: Environmental;
  individualFactors: Individual;
}

function calculateMastersRecovery(
  protocol: MastersRecoveryProtocol
): RecoveryPlan {
  const baseRecovery = {
    EASY_RUN: 24,
    TEMPO_RUN: 48,
    INTERVAL_SESSION: 72,
    LONG_RUN: 48,
    RACE: 168  // 1 week
  };
  
  // Age multiplier (10% per 5 years after 35)
  const ageMultiplier = 1 + ((protocol.age - 35) / 5) * 0.10;
  
  // Environmental adjustments
  const heatMultiplier = protocol.environmentalFactors.temperature > 75 ? 1.2 : 1.0;
  const altitudeMultiplier = protocol.environmentalFactors.elevation > 5000 ? 1.15 : 1.0;
  
  // Individual factors
  const sleepMultiplier = protocol.individualFactors.sleepQuality < 7 ? 1.25 : 1.0;
  const stressMultiplier = protocol.individualFactors.lifeStress > 5 ? 1.20 : 1.0;
  
  const totalMultiplier = 
    ageMultiplier * heatMultiplier * altitudeMultiplier * 
    sleepMultiplier * stressMultiplier;
  
  return {
    minimumHours: baseRecovery[protocol.workoutType] * totalMultiplier,
    recommendedActivities: generateRecoveryActivities(protocol),
    nutritionFocus: generateNutritionPlan(protocol),
    sleepTarget: 8 + (protocol.age - 35) * 0.02  // More sleep with age
  };
}
```

### 2.5 Hormonal Considerations

#### Male Masters Athletes: Testosterone Decline

```typescript
interface MaleHormonalProfile {
  age: number;
  testosteroneLevel?: number;  // ng/dL
  trainingResponse: TrainingResponse;
}

const testosteroneTrainingAdjustments = {
  NORMAL: {  // >400 ng/dL
    recoveryModifier: 1.0,
    strengthEmphasis: 'standard',
    proteinNeeds: 1.6  // g/kg body weight
  },
  LOW_NORMAL: {  // 300-400 ng/dL
    recoveryModifier: 1.15,
    strengthEmphasis: 'increased',
    proteinNeeds: 1.8
  },
  LOW: {  // <300 ng/dL
    recoveryModifier: 1.30,
    strengthEmphasis: 'critical',
    proteinNeeds: 2.0,
    medicalConsult: true
  }
};
```

#### Female Masters Athletes: Menopause Transitions

```typescript
interface FemaleHormonalStage {
  stage: 'pre_menopausal' | 'peri_menopausal' | 'post_menopausal';
  symptoms: Symptom[];
  hrtStatus?: boolean;
}

const menopauseTrainingAdjustments = {
  PRE_MENOPAUSAL: {
    // Continue with menstrual cycle periodization
    approach: 'standard_female_guidelines'
  },
  PERI_MENOPAUSAL: {
    // Highest variability period
    flexibilityRequired: 'high',
    symptomManagement: {
      hotFlashes: 'pre_cooling_strategies',
      moodSwings: 'flexible_training_plans',
      sleepDisturbance: 'morning_training_preferred'
    },
    calciumNeeds: 1200,  // mg/day
    vitaminD: 2000      // IU/day
  },
  POST_MENOPAUSAL: {
    // Stable but different physiology
    boneHealthPriority: 'critical',
    strengthTraining: 'mandatory_3x_week',
    impactExercise: 'beneficial_for_bones',
    recoveryExtension: 1.2
  }
};
```

---

## 3. Youth Athletes Training Guide (Under 18)

### Understanding Growth and Development

Youth athletes require carefully structured training that respects biological development, prevents overuse injuries, and builds lifelong athletic habits.

### 3.1 Biological vs. Chronological Age

```typescript
interface YouthDevelopmentStage {
  chronologicalAge: number;
  biologicalAge: number;     // Estimated from growth markers
  maturityOffset: number;    // Years from Peak Height Velocity
  tannerStage: number;       // 1-5 sexual maturation scale
  growthRate: number;        // cm/year
}

function calculateMaturityOffset(
  youth: YouthAthlete
): MaturityAssessment {
  // Mirwald equation for maturity offset
  const maturityOffset = youth.gender === 'male' ?
    -9.236 + 
    0.0002708 * (youth.legLength * youth.sittingHeight) +
    -0.001663 * (youth.age * youth.legLength) +
    0.007216 * (youth.age * youth.sittingHeight) +
    0.02292 * (youth.weight / youth.height * 100) :
    // Female equation
    -9.376 +
    0.0001882 * (youth.legLength * youth.sittingHeight) +
    0.0022 * (youth.age * youth.legLength) +
    0.005841 * (youth.age * youth.sittingHeight) +
    -0.002658 * (youth.age * youth.weight) +
    0.07693 * (youth.weight / youth.height * 100);
    
  return {
    maturityOffset,
    predictedAgeAtPHV: youth.age - maturityOffset,
    developmentStage: categorizeMaturityStage(maturityOffset),
    trainingRecommendations: generateYouthTrainingPlan(maturityOffset)
  };
}
```

### 3.2 Stage-Specific Training Guidelines

#### Pre-PHV (Before Growth Spurt)
**Typical ages: Girls 8-11, Boys 10-13**

```typescript
const prePHVTraining = {
  primaryFocus: [
    'fundamental_movement_skills',
    'coordination',
    'flexibility',
    'basic_speed'
  ],
  
  trainingStructure: {
    frequency: '3-4 days/week',
    duration: '30-45 minutes',
    intensity: 'low_to_moderate',
    variety: 'high'  // Multiple sports encouraged
  },
  
  runningSpecific: {
    maxContinuousRunning: 15,  // minutes
    intervalWork: 'short_bursts_only',  // <30 seconds
    weeklyMileage: 'age_in_miles',  // 10-year-old = 10 miles/week max
    raceDistances: ['100m', '400m', '800m', '1_mile_max']
  },
  
  strengthTraining: {
    allowed: true,
    type: 'bodyweight_only',
    focus: 'movement_patterns',
    examples: ['bear_crawls', 'crab_walks', 'jumping', 'climbing']
  },
  
  injuryPrevention: {
    criticalAreas: ['flexibility', 'balance', 'coordination'],
    avoidances: ['heavy_loads', 'excessive_mileage', 'year_round_specialization']
  }
};
```

#### Circa-PHV (During Growth Spurt)
**Typical ages: Girls 11-13, Boys 13-15**

```typescript
const circaPHVTraining = {
  criticalConsiderations: [
    'rapid_growth_affects_coordination',
    'increased_injury_risk',
    'temporary_performance_plateau',
    'high_energy_demands'
  ],
  
  trainingAdjustments: {
    reduceVolume: 0.20,  // 20% reduction during rapid growth
    maintainSkills: true,
    avoidNewHighIntensity: true,
    focusOnTechnique: 'critical'
  },
  
  growthMonitoring: {
    heightChecks: 'monthly',
    sittingHeight: 'monthly',
    wingspan: 'monthly',
    identifyPeakGrowth: 'adjust_immediately'
  },
  
  nutritionSupport: {
    calorieIncrease: 1.25,  // 25% above baseline
    proteinTarget: 1.8,     // g/kg body weight
    calciumTarget: 1300,    // mg/day
    sleepTarget: 9         // hours minimum
  },
  
  sampleWeek: {
    monday: 'rest_or_flexibility',
    tuesday: 'technique_drills_20min',
    wednesday: 'easy_run_20min',
    thursday: 'bodyweight_strength',
    friday: 'rest',
    saturday: 'fun_run_or_game_30min',
    sunday: 'cross_training'
  }
};
```

#### Post-PHV (After Growth Spurt)
**Typical ages: Girls 13+, Boys 15+**

```typescript
const postPHVTraining = {
  progressionOpportunity: 'optimal_training_window',
  
  aerobicDevelopment: {
    windowOpens: 'post_PHV',
    volumeProgression: 'gradual_10%_weekly',
    longRunIntroduction: 'progressive',
    maxWeeklyMileage: calculateYouthMaxMileage(age, maturityOffset)
  },
  
  speedDevelopment: {
    neuromuscularWindow: 'boys_18mo_post_PHV',
    girlsConsideration: 'immediately_post_PHV',
    trainingExamples: [
      'flying_30s',
      'acceleration_work',
      'max_velocity_sprints',
      'plyometrics_introduction'
    ]
  },
  
  strengthTraining: {
    resistanceAllowed: true,
    progression: [
      'bodyweight_mastery',
      'light_resistance_bands',
      'dumbbells_technique',
      'barbell_introduction'
    ],
    coachingRequired: true,
    techniqueEmphasis: 'critical'
  }
};

function calculateYouthMaxMileage(
  age: number, 
  maturityOffset: number
): number {
  if (maturityOffset < -1) {
    // Pre-PHV: very conservative
    return Math.min(age * 1.5, 20);
  } else if (maturityOffset < 1) {
    // Circa-PHV: conservative
    return Math.min(age * 1.2, 25);
  } else {
    // Post-PHV: progressive
    return Math.min(age * 2, 40);
  }
}
```

### 3.3 Real-World Youth Development Examples

#### Case Study 1: Emma, 14, Talented Middle-Distance Runner

**Profile:**
- Chronological age: 14.2 years
- Maturity offset: +1.5 years (post-PHV)
- Current PRs: 800m - 2:18, 1500m - 4:45
- Training history: 2 years structured training
- Growth status: Stable (2cm in last 6 months)

**Annual Training Plan:**
```typescript
const emmasAnnualPlan = {
  macrocycles: [
    {
      name: 'Fall Base',
      months: ['September', 'October', 'November'],
      focus: 'aerobic_development',
      weeklyStructure: {
        runs: 5,
        mileage: [20, 22, 25, 18],  // 3 weeks build, 1 recovery
        workouts: 1,  // Simple fartlek or tempo
        longRun: 'sunday_6_8_miles',
        crossTraining: '1_2_days'
      }
    },
    {
      name: 'Winter Speed',
      months: ['December', 'January', 'February'],
      focus: 'speed_development',
      indoorTrack: true,
      weeklyStructure: {
        runs: 4,
        mileage: [18, 20, 22, 16],
        workouts: 2,  // Speed and speed endurance
        raceSimulation: 'bi_weekly',
        strengthTraining: '2x_week'
      }
    },
    {
      name: 'Spring Competition',
      months: ['March', 'April', 'May'],
      focus: 'race_preparation',
      weeklyStructure: {
        runs: 5,
        mileage: [22, 24, 26, 18],
        workouts: 2,
        races: 'weekly_during_season',
        taperProtocol: 'mini_tapers_before_important_meets'
      }
    },
    {
      name: 'Summer Recovery',
      months: ['June', 'July', 'August'],
      focus: 'active_recovery',
      activities: [
        'reduced_running',
        'swimming',
        'hiking',
        'casual_sports',
        'mental_break'
      ]
    }
  ]
};
```

#### Case Study 2: Marcus, 16, Aspiring Distance Runner

**Profile:**
- Chronological age: 16.5 years
- Maturity offset: +2.5 years (well post-PHV)
- Current PRs: 5K - 16:45, 3200m - 10:05
- Training history: 4 years
- Injury history: Mild shin splints (resolved)

**Progressive Training Development:**
```typescript
const marcusProgression = {
  currentPhase: 'advanced_youth',
  
  trainingPhilosophy: {
    patience: 'critical',
    varietyMaintained: true,
    burnoutPrevention: 'primary_concern',
    collegePreparation: 'gradual_buildup'
  },
  
  weeklyMicrocycle: {
    monday: {
      am: 'easy_5mi_7:30_pace',
      pm: 'core_strength_20min'
    },
    tuesday: {
      am: 'workout_day',
      workout: '6x1000m @ 5K_pace (3:20)',
      recovery: '2min_jog',
      total: '8mi_with_warmup_cooldown'
    },
    wednesday: {
      am: 'recovery_4mi_8:00_pace',
      pm: 'optional_pool_running'
    },
    thursday: {
      am: 'steady_6mi_6:50_pace',
      pm: 'strength_training_45min'
    },
    friday: {
      am: 'easy_4mi_7:45_pace',
      pm: 'pre_race_strides'
    },
    saturday: {
      race: 'competition_or_time_trial',
      alternative: 'tempo_run_20min'
    },
    sunday: {
      longRun: '10_12mi_7:15_7:30_pace',
      recovery: 'immediate_nutrition'
    }
  },
  
  totalWeeklyMileage: 45,  // Building to 55 by senior year
  
  injuryPrevention: {
    mandatory: [
      'dynamic_warmup_every_run',
      'post_run_stretching',
      'weekly_massage_or_rolling',
      'strength_training_2x',
      'adequate_sleep_8hrs'
    ],
    surfaces: 'vary_between_track_road_trail',
    shoes: 'rotate_2_3_pairs'
  }
};
```

### 3.4 Long-Term Athletic Development Model

```typescript
interface LTADStage {
  stageName: string;
  ageRange: { min: number; max: number };
  primaryObjectives: string[];
  trainingRatio: { training: number; competition: number };
  specialization: 'none' | 'partial' | 'full';
}

const runningLTADModel: LTADStage[] = [
  {
    stageName: 'Active Start',
    ageRange: { min: 0, max: 6 },
    primaryObjectives: ['fun', 'basic_movement'],
    trainingRatio: { training: 0, competition: 0 },
    specialization: 'none'
  },
  {
    stageName: 'FUNdamentals',
    ageRange: { min: 6, max: 9 },
    primaryObjectives: ['agility', 'balance', 'coordination'],
    trainingRatio: { training: 0, competition: 0 },
    specialization: 'none'
  },
  {
    stageName: 'Learn to Train',
    ageRange: { min: 8, max: 12 },
    primaryObjectives: ['sport_skills', 'running_form'],
    trainingRatio: { training: 70, competition: 30 },
    specialization: 'none'
  },
  {
    stageName: 'Train to Train',
    ageRange: { min: 11, max: 16 },
    primaryObjectives: ['aerobic_base', 'speed_skills'],
    trainingRatio: { training: 60, competition: 40 },
    specialization: 'partial'
  },
  {
    stageName: 'Train to Compete',
    ageRange: { min: 15, max: 21 },
    primaryObjectives: ['event_specific', 'tactical_preparation'],
    trainingRatio: { training: 40, competition: 60 },
    specialization: 'full'
  },
  {
    stageName: 'Train to Win',
    ageRange: { min: 18, max: 99 },
    primaryObjectives: ['podium_performance', 'optimization'],
    trainingRatio: { training: 25, competition: 75 },
    specialization: 'full'
  }
];
```

### 3.5 Parent and Coach Education Points

```typescript
interface YouthTrainingGuidelines {
  category: string;
  guidelines: string[];
  redFlags: string[];
}

const youthEducationPoints: YouthTrainingGuidelines[] = [
  {
    category: 'Volume Progression',
    guidelines: [
      'No more than 10% weekly mileage increase',
      'Mandatory recovery week every 4th week',
      'Summer breaks are essential',
      'Cross-training counts toward total load'
    ],
    redFlags: [
      'Year-round single sport',
      'Adult training programs',
      'Win-at-all-costs mentality',
      'Ignoring growth-related pain'
    ]
  },
  {
    category: 'Competition Schedule',
    guidelines: [
      'Maximum 2 important races per month',
      'Seasonal breaks mandatory',
      'Fun runs don\'t count as races',
      'Time trials are learning opportunities'
    ],
    redFlags: [
      'Racing every weekend',
      'Traveling extensively for youth competitions',
      'Pressure to win scholarships before high school',
      'Comparing to professional athletes'
    ]
  },
  {
    category: 'Health Monitoring',
    guidelines: [
      'Growth charts updated monthly',
      'Menstrual tracking for girls',
      'Energy levels assessment',
      'Enjoyment factor primary'
    ],
    redFlags: [
      'Chronic fatigue',
      'Mood changes',
      'Declining academic performance',
      'Social isolation for training'
    ]
  }
];
```

---

## Implementation Summary

### Critical Success Factors

1. **Individualization is Key**
   - No two athletes in these populations are identical
   - Regular reassessment and plan adjustment required
   - Listen to the athlete's body and feedback

2. **Monitoring Requirements**
   - Female athletes: Menstrual cycle, iron status, bone health
   - Masters athletes: Recovery metrics, injury patterns, health markers
   - Youth athletes: Growth indicators, enjoyment levels, variety

3. **Safety First Approach**
   - Conservative progression always preferred
   - When in doubt, reduce load
   - Build athletes for long-term success

4. **Education and Communication**
   - Athletes must understand the "why"
   - Support systems (family, coaches) need education
   - Regular check-ins and adjustments

### Technology Integration Points

```typescript
interface PopulationSpecificTracking {
  female: {
    required: ['cycle_tracking', 'iron_status', 'bone_density'],
    optional: ['hormonal_panels', 'body_composition']
  };
  masters: {
    required: ['recovery_time', 'injury_log', 'health_metrics'],
    optional: ['hormone_levels', 'vo2max_testing']
  };
  youth: {
    required: ['growth_measurements', 'training_variety', 'fun_factor'],
    optional: ['maturity_assessment', 'talent_identification']
  };
}
```

---

*This guide represents current best practices based on peer-reviewed research. Individual athletes should work with qualified coaches and medical professionals for personalized programming.*

**Document Version**: 1.0  
**Last Updated**: July 2025  
**Next Review**: January 2026