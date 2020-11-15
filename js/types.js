var npcTypes = {
  'Aberration' : {
    'description' : 'An aberration has a bizarre anatomy, strange abilities, an ' +
        'alien mindset, or any combination of the three.',
    'trait' : [],
    'adjustment' : [{'npcWill' : 2}, {'npcSenses' : 'Darkvision 60 ft. '}]
  },
  'Animal':{
    'description' : 'An animal is a living, nonhumanoid creature, usually a ' +
        'vertebrate with no magical abilities and no innate capacity for ' +
        'language or culture.',
    'trait' : [{'npcInt' : -4 }],
    'adjustment' : [ {'npcFort' : 2}, {'npcRef' : 2}, {'npcSenses' :'Low-light vision'} ]
  },
  'Construct':{
    'description' : 'A construct is a magically animated object or an artificially created creature. Must have ' +
        'either the magical or technological subtype; if the construct ' +
        'is mindless, set Intelligence modifier to — and add mindless.',
    'trait' : [{'npcImmunities' : 'construct immunities'}, {'npcCon' : '-'}],
    'adjustment' : [{'npcFort' : -2}, {'npcRef' : -2}, {'npcWill' : -2}, {'npcTypeAttackMod': 1}, {'npcSenses' :'Darkvision 60 ft., Low-light vision'}, {'npcOtherAbilities' : 'unliving'}]
  },
  'Dragon':{
    'trait' : '',
    'adjustment' : []
  },
  'Fey':{
    'trait' : '',
    'adjustment' : []
  },
  'Humanoid':{
    'trait' : '',
    'adjustment' : []
  },
  'Magical Beast':{
    'trait' : '',
    'adjustment' : []
  },
  'Monstrous Humanoid':{
    'trait' : '',
    'adjustment' : []
  },
  'Ooze':{
    'trait' : '',
    'adjustment' : []
  },
  'Outsider':{
    'trait' : '',
    'adjustment' : []
  },
  'Plant':{
    'trait' : '',
    'adjustment' : []
  },
  'Undead':{
    'trait' : '',
    'adjustment' : []
  },
  'Vermin':{
    'trait' : '',
    'adjustment' : []
  }
}