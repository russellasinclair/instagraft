const npcSubTypes = {
  subtypes: [
    'Aanung-an',
    'Aeon',
    'Agathion',
    'Air',
    'Android',
    'Angel',
    'Aquatic',
    'Archon',
    'Azata',
    'Brenneri',
    'Cold',
    'Daemon',
    'Damai',
    'Demon',
    'Dessamar',
    'Devil',
    'Dirindi',
    'Dwarf',
    'Earth',
    'Elemental',
    'Elf',
    'Espraksa',
    'Extraplanar',
    'Fire',
    'Giant',
    'Gnome',
    'Goblinoid',
    'Gray',
    'Halfling',
    'Human',
    'Ikeshti',
    'Incorporeal',
    'Inevitable',
    'Kami',
    'Kasatha',
    'Khizar',
    'Lashunta',
    'Maraquoi',
    'Mindscape',
    'Native',
    'Oni',
    'Orc',
    'Pahtra',
    'Phentomite',
    'Plantlike',
    'Protean',
    'Pyric Revenant',
    'Pyric Wraith',
    'Reptoid',
    'Reptoid Hybrid',
    'Ryphorian',
    'Sarcesian',
    'Shakalta',
    'Shapechanger',
    'Shatori',
    'Shimreen',
    'Shirren',
    'Skittermander',
    'Spectra',
    'Strix',
    'Swarm',
    'Troop',
    'Velstrac',
    'Verthani',
    'Vesk',
    'Vlaka',
    'Water',
    'Ysoki',

    'Anunnaki',
    'Deoxyomorphic',
    'Great Old One',
    'Kitsune',
    'Kumiho',
    'Levialogos',
    'Soulless',
    'Soulshell',
    'Uramae',
  ],

  'Aeon': {
    'description': 'Aeons are a race of neutral outsiders who maintain the balance of reality.',
    'trait': [], 'adjustment': [
      {'npcImmunities': 'Immunity to cold, critical hits, and poison; '},
      {'npcResistances': 'Resistance 10 to electricity and fire; '}],
    'specials': [
      {'npcSpecialsTemp': {'Envisaging (Su)': 'Aeons communicate without language, first scanning beings for their thoughts and intentions and then projecting psychic flashes of a single concept in response. These flashes are usually a combination of visual and aural stimulation that communicate the aeon’s intent or understanding. An aeon’s envisaging functions as a nonverbal form of telepathy with a range of 100 feet, and it counts as a language for the purposes of telepathy and truespeech. Aeons can’t read the thoughts of creatures immune to mind-affecting effects.'}},
      {'npcSpecialsTemp': {'Extension of All (Ex)': 'Aeons can communicate telepathically with other aeons over vast distances. This ability works even across planes, albeit less effectively, allowing the communication of only vague impressions and feelings.'}},
    ],
  },
  'Aanung-an': {
    'description': 'Any creature that dies while performing dark rituals for evil purposes risks rising again as one of the occult dead. (Required Creature Type: Undead. Suggested Array: Spellcaster. Suggested Ability Scores: Intelligence, Wisdom, Charisma. Mysticism as a master skill)',
    'specials': [
      {'npcSpecialsTemp': {'Ritual Scar (Su)': 'An aanung-an that starts its turn grappling a creature can attempt to carve a ritual scar into its victim’s body as a standard action, afflicting it with potent magic. The aanung-an attempts a Mysticism check (DC = 20 + target’s level or CR). On a success, the aanung-an renews the grapple, and the target takes 1d6+4 slashing damage as the aanung-an claws a symbol into its body. The target must then succeed at a DC 15 Will saving throw or suffer one of the following effects of the aanung-an’s choice: bestow curse, slow, or suggestion. These effects function at the aanung-an’s caster level. Certain aanung-ans might inflict different or unique effects with this ability, at the GM’s discretion.'}},
    ],
    'trait': [],
    'adjustment': [
      {'npcSenses': 'Blindsense (thought) 30 ft.; '},
    ],
  },
  'Agathion': {
    'description': 'Agathions are celestials, or good outsiders, native to Nirvana.',
    'trait': [],
    'adjustment': [
      {'npcSenses': 'Low-light vision; '},
      {'npcSaveBonus': '+4 to saving throws against poison; '},
      {'npcImmunities': 'electricity; petrification; '},
      {'npcResistances': 'resistance 10 to cold and sonic; '},
      {'npcOtherAbilities': 'healing channel (as per the healer mystic connection power); truespeech; speak with animals (as per the xenodruid mystic connection power); '}],
  },
  'Air': {
    'description': 'This subtype is usually applied to outsiders with a connection to the Plane of Air.',
    'trait': [],
    'adjustment': [{'npcOtherAbilities': 'Flight (Perfect Maneuverability); '}],
    'masterSkills': ['npcAthl'], // or good
  },
  'Android': {
    'description': 'This subtype is applied to androids and creatures related to androids.(if the NPC is of the android race, it also gains the constructed, flat affect, and upgrade slot racial traits.)',
    'trait': [],
    'adjustment': [{'npcSenses': 'Low-light vision; Darkvision 60 ft.; '}],
  },
  'Angel': {
    'description': 'Angels are celestials, or good outsiders, native to the good-aligned Outer Planes.',
    'trait': [],
    'adjustment': [
      {'npcSenses': 'Low-light vision; Darkvision 60 ft.; '},
      {'npcImmunities': 'immunity to acid, cold, and petrification; '},
      {'npcResistances': 'resistance 10 to electricity and fire; '},
      {'npcOtherAbilities': 'truespeech; '},
      {'npcSaveBonus': ' +4 to saving throws against poison; '},
    ],
    'specials': [
      {'npcSpecialsTemp': {'Protective Aura (Su)': 'For angels of CR 3 to CR 15, this ability grants creatures within the aura (usually 20 feet), including the angel, a divine bonus (usually +2) to AC against attacks made by evil creatures and a divine bonus (usually +4) to saving throws against effects created by evil creatures. The protective aura of a more powerful or a weaker angel might grant a larger or smaller bonus and have a larger or smaller radius, respectively.'}}],
  },
  'Aquatic': {
    'description': 'These creatures are often native to environments that are mostly or entirely underwater. (if it can breathe air, it also gains the amphibious universal creature rule.)',
    'trait': [],
    'adjustment': [],
    'masterSkills': ['npcAthl'], // or good
  },
  'Archon': {
    'description': 'Archons are celestials, or good outsiders, native to Heaven. ( many archons can cast teleport as an at-will spell-like ability (caster level equal to its CR))',
    'trait': [],
    'adjustment': [
      {'npcSenses': 'Low-light vision; Darkvision 60 ft.; '},
      {'npcSaveBonus': '+4 to saving throws against poison; '},
      {'npcImmunities': 'immunity to electricity and petrification; '},
      {'npcResistances': 'resistance 10 to cold and fire; '},
      {'npcOtherAbilities': 'truespeech; '}],
    'specials': [
      {'npcSpecialsTemp': {'Aura of Menace (Su)': 'This ability imposes a divine penalty (usually –2) to the AC, attacks, and saving throws of each hostile creature within the aura (usually 20 feet) that fails a Will save. This penalty lasts for 24 hours or until that creature deals damage to the archon who generated the aura. A creature that has resisted or broken the effect can’t be affected again by the same archon’s aura for 24 hours. The aura of a more powerful or weaker archon might impose a larger or smaller penalty and might have a larger or smaller radius, respectively.'}}],
  },
  'Azata': {
    'description': 'Azatas are celestials, or good outsiders, native to Elysium.',
    'trait': [],
    'adjustment': [
      {'npcSenses': 'Low-light vision; Darkvision 60 ft.; '},
      {'npcImmunities': 'immunity to electricity and petrification; '},
      {'npcOtherAbilities': 'truespeech; '}],
  },
  'Brenneri': {
    'description': 'This subtype is applied to brenneris and creatures related to brenneris. If the NPC is of the brenneri race (page 8, AA3), it also gains the favored object and hold breath racial traits',
    'trait': [],
    'adjustment': [
      {'npcSenses': 'Darkvision 60 ft.; '},
      {'npcOtherAbilities': 'swim speed; '}],
    'masterSkills': ['npcSens', 'npcDipl'],
    'goodSkills': [],
  },
  'Cold': {
    'description': 'Creatures with this subtype are usually native to frigid environments.',
    'trait': [], 'adjustment': [
      {'npcImmunities': 'immunity to cold; '},
      {'npcWeaknesses': 'vulnerable to fire; '},
    ],
  },
  'Daemon': {'description': '', 'trait': [], 'adjustment': []},
  'Damai': {'description': '', 'trait': [], 'adjustment': []},
  'Demon': {'description': '', 'trait': [], 'adjustment': []},
  'Dessamar': {'description': '', 'trait': [], 'adjustment': []},
  'Devil': {'description': '', 'trait': [], 'adjustment': []},
  'Dirindi': {'description': '', 'trait': [], 'adjustment': []},
  'Dwarf': {'description': '', 'trait': [], 'adjustment': []},
  'Earth': {'description': '', 'trait': [], 'adjustment': []},
  'Elemental': {'description': '', 'trait': [], 'adjustment': []},
  'Elf': {'description': '', 'trait': [], 'adjustment': []},
  'Espraksa': {'description': '', 'trait': [], 'adjustment': []},
  'Extraplanar': {'description': '', 'trait': [], 'adjustment': []},
  'Fire': {'description': '', 'trait': [], 'adjustment': []},
  'Giant': {'description': '', 'trait': [], 'adjustment': []},
  'Gnome': {'description': '', 'trait': [], 'adjustment': []},
  'Goblinoid': {'description': '', 'trait': [], 'adjustment': []},
  'Gray': {'description': '', 'trait': [], 'adjustment': []},
  'Halfling': {'description': '', 'trait': [], 'adjustment': []},
  'Human': {'description': '', 'trait': [], 'adjustment': []},
  'Ikeshti': {'description': '', 'trait': [], 'adjustment': []},
  'Incorporeal': {'description': '', 'trait': [], 'adjustment': []},
  'Inevitable': {'description': '', 'trait': [], 'adjustment': []},
  'Kami': {'description': '', 'trait': [], 'adjustment': []},
  'Kasatha': {'description': '', 'trait': [], 'adjustment': []},
  'Khizar': {'description': '', 'trait': [], 'adjustment': []},
  'Lashunta': {'description': '', 'trait': [], 'adjustment': []},
  'Maraquoi': {'description': '', 'trait': [], 'adjustment': []},
  'Mindscape': {'description': '', 'trait': [], 'adjustment': []},
  'Native': {'description': '', 'trait': [], 'adjustment': []},
  'Oni': {'description': '', 'trait': [], 'adjustment': []},
  'Orc': {'description': '', 'trait': [], 'adjustment': []},
  'Pahtra': {'description': '', 'trait': [], 'adjustment': []},
  'Phentomite': {'description': '', 'trait': [], 'adjustment': []},
  'Plantlike': {'description': '', 'trait': [], 'adjustment': []},
  'Protean': {'description': '', 'trait': [], 'adjustment': []},
  'Pyric Revenant': {'description': '', 'trait': [], 'adjustment': []},
  'Pyric Wraith': {'description': '', 'trait': [], 'adjustment': []},
  'Reptoid': {'description': '', 'trait': [], 'adjustment': []},
  'Reptoid Hybrid': {'description': '', 'trait': [], 'adjustment': []},
  'Ryphorian': {'description': '', 'trait': [], 'adjustment': []},
  'Sarcesian': {'description': '', 'trait': [], 'adjustment': []},
  'Shakalta': {'description': '', 'trait': [], 'adjustment': []},
  'Shapechanger': {'description': '', 'trait': [], 'adjustment': []},
  'Shatori': {'description': '', 'trait': [], 'adjustment': []},
  'Shimreen': {'description': '', 'trait': [], 'adjustment': []},
  'Shirren': {'description': '', 'trait': [], 'adjustment': []},
  'Skittermander': {'description': '', 'trait': [], 'adjustment': []},
  'Spectra': {'description': '', 'trait': [], 'adjustment': []},
  'Strix': {'description': '', 'trait': [], 'adjustment': []},
  'Swarm': {'description': '', 'trait': [], 'adjustment': []},
  'Troop': {'description': '', 'trait': [], 'adjustment': []},
  'Velstrac': {'description': '', 'trait': [], 'adjustment': []},
  'Verthani': {'description': '', 'trait': [], 'adjustment': []},
  'Vesk': {'description': '', 'trait': [], 'adjustment': []},
  'Vlaka': {'description': '', 'trait': [], 'adjustment': []},
  'Water': {'description': '', 'trait': [], 'adjustment': []},
  'Ysoki': {'description': '', 'trait': [], 'adjustment': []},

  // Advanced Occult Guide
  'Anunnaki': {'description': '', 'trait': [], 'adjustment': []},
  'Deoxyomorphic': {'description': '', 'trait': [], 'adjustment': []},
  'Great Old One': {'description': '', 'trait': [], 'adjustment': []},
  'Kitsune': {'description': '', 'trait': [], 'adjustment': []},
  'Kumiho': {'description': '', 'trait': [], 'adjustment': []},
  'Levialogos': {'description': '', 'trait': [], 'adjustment': []},
  'Soulless': {'description': '', 'trait': [], 'adjustment': []},
  'Soulshell': {'description': '', 'trait': [], 'adjustment': []},
  'Uramae': {'description': '', 'trait': [], 'adjustment': []},

};
