// Day scene using aframe-environment-component.
window.DAY_SCENE = [
  {
    tag: 'a-entity',
    attrs: {
      environment:
        'preset: forest; ground: hills; groundColor: #4f7f3a; groundColor2: #6aa84f; skyColor: #87CEEB; horizonColor: #d6f0ff; dressingAmount: 40; groundYScale: 6; lighting: distant'
    }
  },

  {
    tag: 'a-text',
    attrs: {
      value: 'Day Scene\nPress the green cube to switch to night',
      position: '-2 2.5 -4',
      color: '#ffffff',
      width: '5'
    }
  },

  {
    tag: 'a-box',
    attrs: {
      class: 'clickable',
      position: '2 1 -3',
      color: '#00ff88',
      depth: '0.3',
      height: '0.5',
      width: '0.5',
      'switch-button': ''
    }
  },

  // Extra sun
  {
    tag: 'a-sphere',
    attrs: {
      position: '6 7 -12',
      radius: '1.4',
      color: '#FFD54A'
    }
  },

  // Extra cloud group 1
  {
    tag: 'a-sphere',
    attrs: {
      position: '-4 6 -10',
      radius: '0.8',
      scale: '1.8 0.8 1',
      color: '#ffffff'
    }
  },
  {
    tag: 'a-sphere',
    attrs: {
      position: '-3.2 6.1 -10',
      radius: '0.7',
      scale: '1.7 0.8 1',
      color: '#ffffff'
    }
  },
  {
    tag: 'a-sphere',
    attrs: {
      position: '-4.8 6.1 -10',
      radius: '0.7',
      scale: '1.7 0.8 1',
      color: '#ffffff'
    }
  },

  // Extra cloud group 2
  {
    tag: 'a-sphere',
    attrs: {
      position: '2 5.5 -9',
      radius: '0.7',
      scale: '1.8 0.8 1',
      color: '#ffffff'
    }
  },
  {
    tag: 'a-sphere',
    attrs: {
      position: '2.7 5.6 -9',
      radius: '0.6',
      scale: '1.6 0.8 1',
      color: '#ffffff'
    }
  },
  {
    tag: 'a-sphere',
    attrs: {
      position: '1.3 5.6 -9',
      radius: '0.6',
      scale: '1.6 0.8 1',
      color: '#ffffff'
    }
  },

  // Extra distant mountains
  {
    tag: 'a-cone',
    attrs: {
      position: '-16 3 -40',
      'radius-bottom': '12',
      'radius-top': '0',
      height: '12',
      color: '#6f7f8f'
    }
  },
  {
    tag: 'a-cone',
    attrs: {
      position: '-5 4 -44',
      'radius-bottom': '14',
      'radius-top': '0',
      height: '16',
      color: '#7b8797'
    }
  },
  {
    tag: 'a-cone',
    attrs: {
      position: '8 3.5 -42',
      'radius-bottom': '13',
      'radius-top': '0',
      height: '14',
      color: '#667788'
    }
  },
  {
    tag: 'a-cone',
    attrs: {
      position: '20 3 -40',
      'radius-bottom': '11',
      'radius-top': '0',
      height: '12',
      color: '#596c7a'
    }
  },

  {
    tag: 'a-light',
    attrs: {
      type: 'ambient',
      intensity: '0.8',
      color: '#ffffff'
    }
  },

  {
    tag: 'a-light',
    attrs: {
      type: 'directional',
      position: '2 8 4',
      intensity: '0.8',
      color: '#fff4d6'
    }
  }
];