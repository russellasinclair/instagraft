"use strict";
var data = {};
const debugMode = true;

data.npcData = {
  npcArray: "",
  npcName: "",
  npcCR: "",
  npcXP: null,
  npcType: "",
  npcTypeDetails: null,
  npcSubtype: "",
  npcSubtypeDetails: null,
  npcGraft: "",
  npcGraftDetails: null,
  npcAlignment: "",
  npcSize: "",
  npcSpecies: "",
  npcClass: "",
  npcClassDetails: null,
  npcInitiative: null,
  npcNotes: "",
  npcSenses: "",
  npcPerception: null,
  npcHP: null,
  npcRP: null,
  npcEAC: null,
  npcKAC: null,
  npcFort: null,
  npcRef: null,
  npcWill: null,
  npcSaveBonus: "",
  npcDR: "",
  npcImmunities: "",
  npcWeaknesses: "",
  npcResistances: "",
  npcSR: "",
  npcSpeed: "",
  npcClimb: "",
  npcBurrow: "",
  npcFly: "",
  npcSwim: "",
  npcAttackHigh: 0,
  npcAttackLow: 0,
  npcTypeAttackMod: 0,
  npcAttacksTemp: {type: "", name: "", bonus: "", damage: ""},
  npcAttacks: {melee: [], multi: [], ranged: []},
  npcRangedDamageEnergy: "",
  npcRangedDamageKinetic: "",
  npcMeleeDamageStandard: "",
  npcMeleeDamageThreeAttacks: "",
  npcMeleeDamageFourAttacks: "",
  npcDefensiveAbilities: "",
  npcOffensiveAbilities: "",
  npcSpellLikeAbilities: "",
  npcOtherAbilities: "",
  npcAura: "",
  npcSpace: "",
  npcReach: "",
  npcAbilityScore1: 0,
  npcAbilityScore2: 0,
  npcAbilityScore3: 0,
  npcAbilityScore1Assigned: "",
  npcAbilityScore2Assigned: "",
  npcAbilityScore3Assigned: "",
  npcSpecialsCount: 0,
  npcMasterSkill: 0,
  npcMasterSkillCount: 0,
  npcGoodSkill: 0,
  npcGoodSkillCount: 0,
  npcAcro: "",
  npcAthl: "",
  npcBluf: "",
  npcComp: "",
  npcCult: "",
  npcDipl: "",
  npcDisg: "",
  npcEngi: "",
  npcInti: "",
  npcLife: "",
  npcMedi: "",
  npcMyst: "",
  npcPerc: "",
  npcPhys: "",
  npcPilo: "",
  npcProf: "",
  npcProfName: "",
  npcSens: "",
  npcSlei: "",
  npcStea: "",
  npcSurv: "",
  npcStr: 0,
  npcDex: 0,
  npcCon: 0,
  npcInt: 0,
  npcWis: 0,
  npcCha: 0,
  npcEnv: "",
  npcOrg: "",
  npcSpecials: [],
  npcSpecialsTemp: {name: "", description: ""},
  sizeChartRecs: {
    "height": "",
    "weight": "",
    "space": "",
    "tallReach": "",
    "longReach": ""
  }
};

data.displayInformation = {
  selectedGraft: "",
  subtypes: menuData.subtypes,
  classesList: menuData.classes,
  speciesList: menuData.species,
  templateGraftList: menuData.templateGrafts,
  summoningGraftList: menuData.summoningGraftList,
  envGraftList: menuData.envGrafts,
  occultGraftList: menuData.occultGrafts,
  otherGrafts: menuData.otherGrafts,
  sizes: menuData.sizes,
  types: menuData.typeList
};

var app = new Vue({
  el: "#app",
  data: data,
  methods: {
    addAbility: function() {
      if (this.npcData.npcSpecialsTemp.name !== "" &&
          this.npcData.npcSpecialsTemp.description !== "") {
        this.npcData.npcSpecials.push({
          name: this.npcData.npcSpecialsTemp.name,
          description: this.npcData.npcSpecialsTemp.description
        });
        this.npcData.npcSpecialsTemp.name = "";
        this.npcData.npcSpecialsTemp.description = "";
      }
    },
    editAbility: function(index) {
      this.npcData.npcSpecialsTemp = {
        name: this.npcData.npcSpecials[index].name,
        description: this.npcData.npcSpecials[index].description
      };
      this.deleteAbility(index);
    },
    deleteAbility: function(index) {
      this.npcData.npcSpecials.splice(index, 1);
    },
    addAttack: function() {
      if (this.npcData.npcAttacksTemp.name !== ""
          && this.npcData.npcAttacksTemp.description !== ""
          && this.npcData.npcAttacksTemp.bonus !== ""
          && this.npcData.npcAttacksTemp.type !== "") {
        this.npcData.npcAttacks[this.npcData.npcAttacksTemp.type].push({
          name: this.npcData.npcAttacksTemp.name,
          bonus: this.npcData.npcAttacksTemp.bonus,
          damage: this.npcData.npcAttacksTemp.damage
        });
        this.npcData.npcAttacksTemp = {
          type: "", name: "", bonus: "", damage: ""
        };
      }
    },
    editAttack: function(type, index) {
      this.npcData.npcAttacksTemp = {
        type: type,
        name: this.npcData.npcAttacks[type][index].name,
        bonus: this.npcData.npcAttacks[type][index].bonus,
        damage: this.npcData.npcAttacks[type][index].damage
      };
      this.deleteAttack(type, index);
    },
    deleteAttack: function(type, index) {
      this.npcData.npcAttacks[type].splice(index, 1);
    },
    displayClassInList: function(array, classname) {
      if (array === "Expert") {
        switch (classname) {
          case "Envoy":
          case "Mechanic":
          case "Operative":
            return true;
        }
      }
      if (array === "Combatant") {
        switch (classname) {
          case "Soldier":
          case "Solarian":
          case "Elementian":
            return true;
        }
      }
      if (array === "Spellcaster") {
        switch (classname) {
          case "Mystic":
          case "Technomancer":
            return true;
        }
      }
      return false;
    },
    updateCR: function() {
      getStats(this.npcData.npcArray, this.npcData.npcCR);
      updateAbilityScores();
    },
    updateSize: function() {
      let list = ["height", "weight", "space", "tallReach", "longReach"];
      for (let i in list) {
        this.npcData.sizeChartRecs[list[i]] = sizeChart[this.npcData.npcSize][list[i]];
      }
    },
    updateSpecies: function() {
      console.log("Stub - no Species Mods");
    },
    updateClass: function() {
      parseData("./json/classes.json", this.npcData.npcClass,
          "npcClassDetails");
    },
    updateType: function() {
      parseData("./json/types.json", this.npcData.npcType, "npcTypeDetails");
    },
    updateGraft: function() {
      let graft;
      switch (this.displayInformation.selectedGraft) {
        case "Summoning" :
          graft = "./json/summoningGrafts.json";
          break;
        case "Environmental" :
          graft = "./json/envGrafts.json";
          break;
        case "Occult" :
          graft = "./json/occultGrafts.json";
          break;
        case "Template" :
          graft = "./json/templateGrafts.json";
          break;
        case "Other" :
          graft = "./json/otherGrafts.json";
          break;
      }
      parseData(graft, this.npcData.npcGraft, "npcGraftDetails");
    },
    updateSubtype: function() {
      parseData("./json/subtypes.json", this.npcData.npcSubtype,
          "npcSubtypeDetails");
    },
    showWarning: function(warning) {
      if (warning === "abilities") {
        if (this.npcData.npcAbilityScore1Assigned === "") {
          return false;
        }
        if (this.npcData.npcAbilityScore2Assigned === "") {
          return false;
        }
        if (this.npcData.npcAbilityScore3Assigned === "") {
          return false;
        }
        if (this.npcData.npcAbilityScore1Assigned ===
            this.npcData.npcAbilityScore2Assigned) {
          return true;
        }
        if (this.npcData.npcAbilityScore1Assigned ===
            this.npcData.npcAbilityScore3Assigned) {
          return true;
        }
        return this.npcData.npcAbilityScore2Assigned ===
            this.npcData.npcAbilityScore3Assigned;

      }
    },
    updateAbilities: function () {
      updateAbilityScores();
    }
  }
});

function debugLog(text) {
  if (debugMode) {
    console.log(text)
  }
}

function genericUpdateData(details, fullData) {

  debugLog("Details = " + details + " : fullData = " + fullData);

  app.npcData[fullData] = details;
  for (let i in details.adjustment) {
    let stat = Object.getOwnPropertyNames(details.adjustment[i])[0];
    debugLog("stat = " + stat);
    debugLog("details.adjustment = " + details.adjustment[i][stat]);
    if (app.npcData[stat].trim() !== "") {
      app.npcData[stat] += ",";
    }
    app.npcData[stat] += details.adjustment[i][stat];
  }
  for (let i in details.trait) {
    let stat = Object.getOwnPropertyNames(details.trait[i])[0];
    app.npcData[stat] = details.trait[i][stat];
  }
  for (let i in details.specials) {
    let stat = Object.getOwnPropertyNames(
        details.specials[i].npcSpecialsTemp)[0];
    app.npcData.npcSpecialsTemp.name = stat;
    app.npcData.npcSpecialsTemp.description = details.specials[i].npcSpecialsTemp[stat];
    app.addAbility();
  }
  if (app.npcData.npcTypeAttackMod !== 0) {
    app.npcData.npcAttackHigh += app.npcData.npcTypeAttackMod;
    app.npcData.npcAttackLow += app.npcData.npcTypeAttackMod;
  }
  for (let i in details.masterSkills) {
    let stat = details.masterSkills[i];
    app.npcData[stat] += app.npcData.npcMasterSkill;
  }
  for (let i in details.goodSkills) {
    let stat = details.goodSkills[i];
    app.npcData[stat] += app.npcData.npcGoodSkill;
  }
}

function updateAbilityScores() {
  let list = ["Str", "Dex", "Con", "Int", "Wis", "Cha"];
  for (let i in list) {
    if (app.npcData.npcAbilityScore1Assigned === list[i]) {
      app.npcData["npc" + list[i]] = app.npcData.npcAbilityScore1;
    } else if (app.npcData.npcAbilityScore2Assigned === list[i]) {
      app.npcData["npc" + list[i]] = app.npcData.npcAbilityScore2;
    } else if (app.npcData.npcAbilityScore3Assigned === list[i]) {
      app.npcData["npc" + list[i]] = app.npcData.npcAbilityScore3;
    } else {
      app.npcData["npc" + list[i]] = 0;
    }
  }
  app.npcData.npcInitiative = app.npcData.npcDex;
}

function getStats(array, cr) {
  try {
    for (let i in app.npcData) {
      if (arrays[array][cr][i] !== undefined) {
        app.npcData[i] = arrays[array][cr][i];
      }
      app.npcData.npcXP = xp[cr].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //XP from CR
      app.npcData.npcPerception = arrays[array][cr].npcGoodSkill; //Perception is a "Good" skill by default
    }
  } catch (error) {
    console.log("Insufficient information to lookup data");
  }
}

function parseData(filename, graftName, details) {
  let xhttp = new XMLHttpRequest();
  xhttp.onloadend = function() {
    if (this.readyState === 4 && this.status === 200) {
      let graft = JSON.parse(xhttp.responseText);
      genericUpdateData(graft[graftName], details);
    }
  };
  xhttp.open("GET", filename);
  xhttp.send();
}

