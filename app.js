var data = {};

data.npcData = {
  npcArray: '',
  npcName: '',
  npcCR: '',
  npcXP: null,
  npcType: '',
  npcSubtype: '',
  npcGraft: '',
  npcAlignment: '',
  npcSize: '',
  npcSpecies: '',
  npcClass: '',
  npcInitiative: null,
  npcSenses: '',
  npcPerception: null,
  npcHP: null,
  npcRP: null,
  npcEAC: null,
  npcKAC: null,
  npcFort: null,
  npcRef: null,
  npcWill: null,
  npcDR: '',
  npcImmunities: '',
  npcWeaknesses: '',
  npcResistances: '',
  npcSR: '',
  npcSpeed: '',
  npcClimb: '',
  npcBurrow: '',
  npcFly: '',
  npcSwim: '',
  npcAttackHigh: '',
  npcAttackLow: '',
  npcAttacksTemp: {type: '', name: '', bonus: '', damage: ''},
  npcAttacks: {melee: [], multi: [], ranged: []},
  npcRangedDamageEnergy: '',
  npcRangedDamageKinetic: '',
  npcMeleeDamageStandard: '',
  npcMeleeDamageThreeAttacks: '',
  npcMeleeDamageFourAttacks: '',
  npcDefensiveAbilities: '',
  npcOffensiveAbilities: '',
  npcSpellLikeAbilities: '',
  npcOtherAbilities: '',
  npcAura: '',
  npcSpace: '',
  npcReach: '',
  npcAbilityScore1: 0,
  npcAbilityScore2: 0,
  npcAbilityScore3: 0,
  npcAbilityScore1Assigned: '',
  npcAbilityScore2Assigned: '',
  npcAbilityScore3Assigned: '',
  npcSpecialsCount: 0,
  npcMasterSkill: 0,
  npcMasterSkillCount: 0,
  npcGoodSkill: 0,
  npcGoodSkillCount: 0,
  npcAcro: '',
  npcAthl: '',
  npcBluf: '',
  npcComp: '',
  npcCult: '',
  npcDipl: '',
  npcDisg: '',
  npcEngi: '',
  npcInti: '',
  npcLife: '',
  npcMedi: '',
  npcMyst: '',
  npcPerc: '',
  npcPhys: '',
  npcPilo: '',
  npcProf: '',
  npcProfName: '',
  npcSens: '',
  npcSlei: '',
  npcStea: '',
  npcSurv: '',
  npcStr: 0,
  npcDex: 0,
  npcCon: 0,
  npcInt: 0,
  npcWis: 0,
  npcCha: 0,
  npcEnv: '',
  npcOrg: '',
  npcSpecials: [],
  npcSpecialsTemp: {name: '', description: ''},
  classes: [
    'Envoy',
    'Mechanic',
    'Mystic',
    'Operative',
    'Solarian',
    'Soldier',
    'Technomancer',
    'Elementian'],
  types: [
    'Abberation',
    'Animal',
    'Construct',
    'Dragon',
    'Fey',
    'Humanoid',
    'Magical Beast',
    'Monstrous Humanoid',
    'Ooze',
    'Outsider',
    'Plant',
    'Undead',
    'Vermin'],
  grafts: [
    '--Elemental--',
    'Air',
    'Earth',
    'Fire',
    'Ice',
    'Lightning',
    'Magma',
    'Water',
    '--Environmental--',
    'Airborne',
    'Aquatic',
    'Arboreal',
    'Arctic',
    'Desert',
    'Forest',
    'Marsh',
    'Mountain',
    'Plains',
    'Radioactive',
    'Solar',
    'Space',
    'Subterranean',
    'Thermic',
    '--Template--',
    'Aerial (CR 1+)',
    'Aqueous (CR 1+)',
    'Astral',
    'Celestial',
    'Cthonic (CR 1+)',
    'Cybernetic (CR 1/2+)',
    'Entropic',
    'Fiendish',
    'Fiery (CR 1+)',
    'Giant (CR 1+)',
    'Miniature',
    'Phrenic',
    'Resolute',
    'Synthetic',
    'Two-Headed (CR 3+)',
    'Umbral',
    '--Occult--',
    'Obscured',
    'Nightmare',
    'Transposed'],
  subtypes: [
    'Aeon',
    'Aquatic',
    'Azata',
    'Brenneri',
    'Cold',
    'Damai',
    'Demon',
    'Dessamar',
    'Devil',
    'Dirindi',
    'Earth',
    'Elemental',
    'Espraksa',
    'Extraplanar',
    'Fire',
    'Giant',
    'Goblinoid',
    'Incorporeal',
    'Kami',
    'Khizar',
    'Oni',
    'Orc',
    'Pahtra',
    'Phentomite',
    'Plantlike',
    'Pyric Revenant',
    'Pyric Wraith',
    'Shakalta',
    'Shapechanger',
    'Shatori',
    'Shimreen',
    'Skittermander',
    'Spectra',
    'Strix',
    'Swarm',
    'Velstrac',
    'Vlaka',
    'Water',
    '---',
    'Anunnaki',
    'Deoxyomorphic',
    'Great Old One',
    'Kitsune',
    'Kumiho',
    'Levialogos',
    'Soulless',
    'Soulshell',
    'Uramae'],
  sizes: [
    'Ultrafine',
    'Fine',
    'Dimunitive',
    'Tiny',
    'Small',
    'Medium',
    'Large',
    'Huge',
    'Gargantuan',
    'Colossal',
    'Supercolossal'],
  sizeChartRecs: {
    'height': '',
    'weight': '',
    'space': '',
    'tallReach': '',
    'longReach': '',
  },
};

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    addAbility: function() {
      if (this.npcData.npcSpecialsTemp.name != '' &&
          this.npcData.npcSpecialsTemp.description != '') {
        this.npcData.npcSpecials.push({
          name: this.npcData.npcSpecialsTemp.name,
          description: this.npcData.npcSpecialsTemp.description,
        });
        this.npcData.npcSpecialsTemp.name = '';
        this.npcData.npcSpecialsTemp.description = '';
      }
    },
    editAbility: function(index) {
      this.npcData.npcSpecialsTemp = {
        name: this.npcData.npcSpecials[index].name,
        description: this.npcData.npcSpecials[index].description,
      };
      this.deleteAbility(index);
    },
    deleteAbility: function(index) {
      this.npcData.npcSpecials.splice(index, 1);
    },
    addAttack: function() {
      if (this.npcData.npcAttacksTemp.name != ''
          && this.npcData.npcAttacksTemp.description != ''
          && this.npcData.npcAttacksTemp.bonus != ''
          && this.npcData.npcAttacksTemp.type != '') {
        this.npcData.npcAttacks[this.npcData.npcAttacksTemp.type].push({
          name: this.npcData.npcAttacksTemp.name,
          bonus: this.npcData.npcAttacksTemp.bonus,
          damage: this.npcData.npcAttacksTemp.damage,
        });
        this.npcData.npcAttacksTemp = {
          type: '', name: '', bonus: '', damage: '',
        };
      }
    },
    editAttack: function(type, index) {
      this.npcData.npcAttacksTemp = {
        type: type,
        name: this.npcData.npcAttacks[type][index].name,
        bonus: this.npcData.npcAttacks[type][index].bonus,
        damage: this.npcData.npcAttacks[type][index].damage,
      };
      this.deleteAttack(type, index);
    },
    deleteAttack: function(type, index) {
      this.npcData.npcAttacks[type].splice(index, 1);
    },
    displayClassInList: function(array, classname) {
      if (array == 'Expert') {
        switch (classname) {
          case 'Envoy':
            return true;
            break;
          case 'Mechanic':
            return true;
            break;
          case 'Operative':
            return true;
            break;
        }
      }
      if (array == 'Combatant') {
        switch (classname) {
          case 'Soldier':
            return true;
            break;
          case 'Solarian':
            return true;
            break;
          case 'Elementian':
            return true;
            break;
        }
      }
      if (array == 'Spellcaster') {
        switch (classname) {
          case 'Mystic':
            return true;
            break;
          case 'Technomancer':
            return true;
            break;
        }
      }
      return false;
    },
    updateCR: function() {
      getStats(this.npcData.npcArray, this.npcData.npcCR);
      updateAbilityScores();
    },
    updateSize: function() {
      updateSizeChart();
    },
    updateSpecies: function() {
      console.log('Need to update stats based on species.');
    },
    updateClass: function() {
      updateClassData();
    },
    updateType: function() {
      updateTypeData();
    },
    updateGraft: function() {
      updateGraft();
    },
    updateSubtype: function() {
      console.log('Need to update stats based on subtype.');
    },
    showWarning: function(warning) {
      if (warning == 'abilities') {
        if (this.npcData.npcAbilityScore1Assigned == '') {
          return false;
        }
        if (this.npcData.npcAbilityScore2Assigned == '') {
          return false;
        }
        if (this.npcData.npcAbilityScore3Assigned == '') {
          return false;
        }
        if (this.npcData.npcAbilityScore1Assigned ==
            this.npcData.npcAbilityScore2Assigned) {
          return true;
        } else if (this.npcData.npcAbilityScore1Assigned ==
            this.npcData.npcAbilityScore3Assigned) {
          return true;
        } else if (this.npcData.npcAbilityScore2Assigned ==
            this.npcData.npcAbilityScore3Assigned) {
          return true;
        } else return false;
      }
    },
    updateAbilities: function() {
      updateAbilityScores();
    },
  },
});

function updateClassData() {
  if (app.npcData.npcClass == 'Envoy') {
    app.npcData.npcRef += 2;
    app.npcData.npcSens = app.npcData.npcMasterSkill;
  }
}

function updateTypeData() {
}

function updateGraft() {
}

function updateSizeChart() {
  var list = ['height', 'weight', 'space', 'tallReach', 'longReach'];
  for (let i in list) {
    app.npcData.sizeChartRecs[list[i]] = sizeChart[app.npcData.npcSize][list[i]];
  }
}

function updateAbilityScores() {
  var list = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
  for (let i in list) {
    if (app.npcData.npcAbilityScore1Assigned == list[i]) {
      app.npcData['npc' + list[i]] = app.npcData.npcAbilityScore1;
    } else if (app.npcData.npcAbilityScore2Assigned == list[i]) {
      app.npcData['npc' + list[i]] = app.npcData.npcAbilityScore2;
    } else if (app.npcData.npcAbilityScore3Assigned == list[i]) {
      app.npcData['npc' + list[i]] = app.npcData.npcAbilityScore3;
    } else {
      app.npcData['npc' + list[i]] = 0;
    }
  }
  app.npcData.npcInitiative = app.npcData.npcDex;
}

function getStats(array, cr) {
  for (let i in app.npcData) {
    if (arrays[array][cr][i] != undefined) {
      app.npcData[i] = arrays[array][cr][i];
    }
    app.npcData.npcXP = xp[cr].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); //XP from CR
    app.npcData.npcPerception = arrays[array][cr].npcGoodSkill; //Perception is a "Good" skill by default
  }
}
