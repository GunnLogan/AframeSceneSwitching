// Night scene using aframe-environment-component.
window.NIGHT_SCENE = [
  {
    tag: 'a-entity',
    attrs: {
      environment:
        'preset: forest; ground: hills; groundColor: #1c2d1f; groundColor2: #0c1410; skyColor: #081426; horizonColor: #111a33; dressingAmount: 25; groundYScale: 6; lighting: distant; starType: dots'
    }
  },

  {
    tag: 'a-text',
    attrs: {
      value: 'Night Scene\nPress the pink cube to switch to day',
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
      color: '#ff44aa',
      depth: '0.3',
      height: '0.5',
      width: '0.5',
      'switch-button': ''
    }
  },

  // Moon
  {
    tag: 'a-sphere',
    attrs: {
      position: '5 6.5 -12',
      radius: '1.1',
      color: '#dfe8ff'
    }
  },

  // Extra stars
  {
    tag: 'a-sphere',
    attrs: { position: '-8 7 -16', radius: '0.08', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '-6 5.8 -12', radius: '0.06', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '-3 6.2 -13', radius: '0.07', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '0 7.5 -15', radius: '0.09', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '2.5 6.8 -14', radius: '0.06', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '4.5 7.2 -17', radius: '0.08', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '7 6.3 -15', radius: '0.07', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '-1.5 5.9 -11', radius: '0.05', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '6 5.8 -13', radius: '0.06', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '9 7.3 -20', radius: '0.08', color: '#ffffff' }
  },
  {
    tag: 'a-sphere',
    attrs: { position: '-10 6.9 -21', radius: '0.07', color: '#ffffff' }
  },

  // Extra distant mountains
  {
    tag: 'a-cone',
    attrs: {
      position: '-16 3 -40',
      'radius-bottom': '12',
      'radius-top': '0',
      height: '12',
      color: '#2e3744'
    }
  },
  {
    tag: 'a-cone',
    attrs: {
      position: '-5 4 -44',
      'radius-bottom': '14',
      'radius-top': '0',
      height: '16',
      color: '#384252'
    }
  },
  {
    tag: 'a-cone',
    attrs: {
      position: '8 3.5 -42',
      'radius-bottom': '13',
      'radius-top': '0',
      height: '14',
      color: '#2a3340'
    }
  },
  {
    tag: 'a-cone',
    attrs: {
      position: '20 3 -40',
      'radius-bottom': '11',
      'radius-top': '0',
      height: '12',
      color: '#222a35'
    }
  },

  {
    tag: 'a-light',
    attrs: {
      type: 'ambient',
      intensity: '0.45',
      color: '#aab8ff'
    }
  },

  {
    tag: 'a-light',
    attrs: {
      type: 'directional',
      position: '2 6 4',
      intensity: '0.35',
      color: '#c9d6ff'
    }
  }
];