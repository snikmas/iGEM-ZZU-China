
// input modal
export function describeStyle(style){
  switch (style.toLowerCase()){
    case "active":
      return 'Hiking, trekking, biking, rafting, and kayaking adventures all over the world, made for outdoor types.';
    case "classic":
      return 'All of the highlights, culture, access, and I-can’t-believe-we-did-that moments, all at a great price'
    case 'family':
      return 'Trips built for adventurers of all ages with age-appropriate activities and hotels that know families.'
  }
}

export function describeService(service){
  switch (service.toLowerCase()){
    case 'basic':
    return 'Simple and clean hotels and hostels; affordable public and private transport; lots of optional activities.'
    case 'camping':
      return 'Camping most nights with some hotel/hostel stays to start and throughout; affordable public and private transport.'
    case 'standard':
      return 'Comfortable tourist-class accommodations with character; mix of public and private transport.'
    case 'upgrated':
      return 'Quality accommodations and more inclusions than on other G Adventures tours, like meals, private transport, and activities.'
  }
}

export function describeType(type){
  switch (type.toLowerCase()){
    case 'small group':
      return 'Small group experience; Max 12, avg 10'
    case 'independent travel':
      return 'Independent trips are either entire trips you take privately or solo extensions to a group tour. Local staff are available on standby 24/7.'
    case 'day tours':
      return 'All day travel'
  }
}

export function describeAge(age){
  return "All travellers under age 18 must be accompanied by an adult."
}


export function describePhysic(rating){
  console.log(rating)
  rating = rating.toLowerCase()
  switch(rating){
    case "easy":
      return 'Light walking, few climbs more challenging than a flight of stairs. Easy does it.'
    case 'light':
      return 'Light walking and hiking suitable for most fitness levels. Nothing too challenging.'
    case "average":
      return 'Some tours may include light hiking, biking, rafting, or kayaking in addition to walking.'
    case 'demanding':
      return 'Some high-altitude hikes or more strenuous activities, but accessible to most healthy travellers.'
    case 'challenging':
      return 'Serious high-altitude hikes, cycling, or other instances of heavy exercise. Come prepared to sweat a bit.'
  }
}
