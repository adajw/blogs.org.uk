/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  // Sets app default base URL
  app.baseUrl = '/';
  if (window.location.port === '') {  // if production
    // Uncomment app.baseURL below and
    // set app.baseURL to '/your-pathname/' if running from folder in production
    // app.baseUrl = '/polymer-starter-kit/';
  }

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!Polymer.dom(document).querySelector('platinum-sw-cache').disabled) {
      Polymer.dom(document).querySelector('#caching-complete').show();
    }
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
    var committee = [
      /* Empty
      {
        name: '',
        bio: [],
        role: '',
        pronoun: '',
        face: '',
        anchor: '',
        flags: [{}]
      },
      */
      {
        name: 'Sam',
        bio: [
          'As President, I lead and co-ordinate the society, chair committee meetings and follow through on the decisions made within them. I also work with other committee members to organise a wide variety of events to cater to as many people as possible! Additionally, I represent BLOGS within EUSA and the wider LGBTQ+ community. This year, my focus is mainly on creating a more united community within the society and around Edinburgh in general, to ensure a sense security and create positive atmosphere. If you’d like to chat about anything at all, catch me at society events or just message me on Facebook or use the email - always happy to help!',
          'I’m originally from Leeds in Northern England and I joined BLOGS in my first year of university, and I’m now in my third year studying Linguistics and English Language. My interests predominantly lie in music, literature and linguistics, as well as a dash of poetry every now and again. My hair is ever-changing, I’m a complete cat lady and I am very, very small.',
          'The reason I joined BLOGS in the first place is because I’m very sociable, I love meeting new people, and hopefully I can put in to the society what it gave me in my first year: a sense of community and belonging.'
        ],
        role: 'President',
        pronoun: [
          {name: 'She', pronouns:'She Her Her Hers Herself'}
        ],
        face: '/images/profile/sam.jpg',
        anchor: 'sam',
        flags: [{icon:'flag:pride',name:'Pride'}],
        social: [
          {
            network: 'facebook',
            id: 'samlmryan'
          },
          {
            network: 'instagram',
            id: 'sam_i_am_ryan'
          }
        ]
      },
      {
        name: 'Will',
        bio: [
            'I’m originally from South Yorkshire (A little way outside Sheffield) but I’ve been up here in Edinburgh for the past two years. This’ll be my second year as a BLOGS committee member and third year as a general member, and I’m looking forward to having another great year ahead of us. BLOGS has been great for me with meeting a lot of people (as well as the people I currently live with) and it’ll be brilliant to help other members have as good an experience as I’ve had the past few years. Previously I was Men’s officer, but this year my main job is mainly administration (taking minutes at committee meeting and helping organise/facilitate the committee’s endeavours), but I’m a friendly face at most events so feel free to come say hi, or talk to me if you have any issues or anything at all.'
        ],
        role: 'Secretary',
        pronoun: [
          {name:'He', pronouns:'He Him His His Himself'}
        ],
        face: '/images/profile/will.jpg',
        anchor: 'will',
        flags: [{icon:'flag:pride',name:'Pride'}],
        social: {
          network: 'facebook',
          id: 'willkingyup'
        }
      },
      {
        name: 'Jacob',
        bio: [
          'I’m the current Treasurer for BLOGS, which means I get the fun job of handling the society’s money, collecting membership fees and selling tickets for all of the great events that the society is running. On top of this I’ll be contributing to the day to day running of the society and the organisation of events.',
          'I’m from Aberdeen (don’t judge me) and if you don’t have a clue where my accent is from, or how to pronounce my surname; don’t blame yourself, very few people do. I’ve lived in Scotland most of my life and I came down to Edinburgh last year to study astrophysics (which is awesome).',
          'I enjoy reading watching films and playing video games and it’s a wonder that I’ve never needed to be surgically separated from my Playstation. I joined BLOGS last year and found it to be a welcoming environment filled with a group of really fun, interesting people and I decided to join the committee in order to help offer the same opportunity to others. If you want to chat about anything I’m always up for a conversation.'
        ],
        pronoun: [
          {name:'He', pronouns:'He Him His His Himself'}
        ],
        role: 'Treasurer',
        face: '/images/profile/jacob.jpg',
        anchor: 'jacob',
        flags: [{icon:'flag:pride',name:'Pride'}]
      },
      {
        name: 'Rosie',
        bio: [
          'I’m a second year Illustration student at the College of Art, originally from Hampshire in the south of England. I have a passion for fiction and music with queer feminist themes, and love to overanalyse cartoons, post terrible memes, and make art. As the asexual and aromantic spectra officer, my role is to represent those groups on the committee, and to offer advice and support to BLOGS members who identify or are questioning whether they identify in those ways. I’m particularly committed to working to educate and increase ace and aro visibility both within BLOGS and the wider student body, as well as fostering a sense of community between ace and aro spectra folks in BLOGS. I also work with the fiction subgroup to organise socials and discussions about LGBT+ topics in fiction and fandom. I also had the pleasure of creating the design scheme for BLOGS this year!'
        ],
        role: 'Ace/Aro Rep', // query this
        pronoun: [
          {name: 'She', pronouns:'She Her Her Hers Herself'}
        ],
        face: '/images/profile/rosie.jpg',
        anchor: 'rosie',
        flags: [{icon:'flag:aro',name:'aromantic'},{icon:'flag:pan',name:'pan'},{icon:'flag:aceflux',name:'aceflux'}],
        social: [
          {
            network: 'facebook',
            id: 'RosieHawtin'
          },
          {
            network: 'tumblr',
            id: 'rosiehawtin'
          }
        ]
      },
      {
        name: 'Abbi',
        bio: [],
        role: 'Trans, Non-binary & Intersex Rep',
        pronoun: [
          {name: 'She', pronouns:'She Her Her Hers Herself'}
        ],
        face: '',
        anchor: 'abbi',
        flags: [{}]
      },
      {
        name: 'Cynthia',
        bio: [
          'My position as the Bi/Pan Officer this year entails bringing together the community of bisexual and pansexual members within the larger BLOGS community and creating a safe and friendly space with communication and understanding. To achieve this, I will be organising events specific to the groups, such as casual coffees and maybe even nights out. I will also be around or easily reachable for any members who need a listening ear, so please feel free to talk to me. As a personal interest of mine, I will also try to encourage creativity in the group, whether through art, literature, music etc. and to plan events that support talent within the general Blogs Society.',
          'I’m currently a 3rd Year Architecture student. I hail from Tanzania and I absolutely love writing poetry. I think I’m easily approachable, and am usually identifiable by my ridiculously untamed dreadlocks. I consider my identification as part of the LGBT+ community as one of my most important characteristics and I do hope that through this position and getting to know as many of you as I possibly can, I can be more confident in raising my flag.'
        ],
        role: 'Bi & Pan Rep',
        pronoun: [
          {name: 'She', pronouns:'She Her Her Hers Herself'}
        ],
        face: '/images/profile/cynthia-2.jpg',
        anchor: 'cynthia',
        flags: [{icon:'flag:bi',name:'Bi'}]
      },
      {
        name: 'Erin',
        bio: [],
        role: 'Women\'s Rep',
        pronoun: [{name:'She', pronouns:'She Her Her Hers Herself'}],
        face: '',
        anchor: 'erin',
        flags: [{}]
      },
      {
        name: '',
        bio: ['This position is yet to be elected.'],
        role: 'Disability & Mental Health Rep',
        pronoun: '',
        face: '',
        anchor: 'disability',
        flags: [{}]
      },
      {
        name: '',
        bio: ['This position is yet to be elected.'],
        role: 'BME Rep',
        pronoun: '',
        face: '',
        anchor: 'bme',
        flags: [{}]
      },
      {
        name: 'Stephen',
        bio: [
          'Hi! So I’m the Men’s Officer for 2015/16, here to provide support and guidance for those in BLOGS who identify as men. I am in charge of the Men’s Group on facebook and will hopefully be hosting a few events throughout the year, let me know if you have any suggestions :)',
          'Originally from Northern Ireland (booo), I’m now a Civil Engineering student at Edinburgh (best city ever). I joined BLOGS in first year and had such a fab time; we all know it’s the best society. I made great friends through the group, including flatmates for second year, and hope to continue to meet lots of new friends, especially being on the committee. Be sure to say hi, I’m not particularly exciting but I’m pretty friendly and always up for a chat. I’m a bit of a technology enthusiast, and into a lot of music (mostly pop, instrumental, alternative); also *trying* to teach myself some French… But yeah, say hi, and be sure to let me know if you have any ideas or suggestions for events, I’ll try to take as much on board as I can!'
        ],
        role: 'Men\'s Rep',
        pronoun: [
          {name:'He', pronouns:'He Him His His Himself'}
        ],
        face: '/images/profile/stephen.jpg',
        anchor: 'stephen',
        flags: [{icon:'flag:pride',name:'Pride'}]
      },
      {
        name: 'Fraser',
        bio: [],
        role: 'Postgrad & Mature Students Rep',
        pronoun: [
          {name:'He', pronouns:'He Him His His Himself'}
        ],
        face: '',
        anchor: 'fraser',
        flags: [{}]
      },
      {
        name: 'Ali',
        bio: [],
        role: 'Campaigns',
        pronoun: [
          {name:'Spivak',pronouns:'Ey Em Eir Eirs Emself'},
          {name:'They', pronouns:'They Them Their Theirs Themself'}
        ], //check
        face: '',
        anchor: 'ali',
        flags: [{}]
      },
      {
        name: 'Rachel',
        bio: [],
        role: 'EUSA LGBT+ Convenor',
        pronoun: [
          {name: 'She', pronouns:'She Her Her Hers Herself'}
        ],
        face: '',
        anchor: 'rachel',
        flags: [{}]
      },
      {
        name: 'Nate',
        bio: ['Nerd'],
        pronoun: [
          {name:'They', pronouns: 'They Them Their Theirs Themself'}
        ],
        role: 'Tech Support',
        face: '/images/profile/nate.jpeg',
        anchor: 'nate',
        flags: [
          {icon:'flag:trans',name:'trans'},
          {icon:'flag:genderflux',name:'genderflux'},
          {icon:'flag:nonbinary',name:'non-binary'},
          {icon:'flag:softhomo',name:'follow for more soft homo #pastelgrunge'}
            ]
      },

      {
        name: 'Hannah',
        bio: [
          'Originally from Vienna, Austria, I came to Edinburgh in 2014 after four years in Frankfurt, Germany. BLOGS was the first society I joined, and a few weeks later I suggested, helped create, and then  took on the position of Ace/Aro Officer. This year I’m an Ordinary Member, which means I support the society and its committee in a more general sense, representing all members rather than a specific group. My main concerns are providing a wide variety of events and making new, younger BLOGS members feel safe and welcome. In my free time, I enjoy crocheting, cycling, singing with the university’s Renaissance Singers and reading historical fiction; my non-biological interests are linguistics, indie music and medieval studies. If you have any questions, don’t hesitate to ask me!'
        ],
        role: 'Ordinary Member',
        pronoun: [
          {name:'None', pronouns:'Refer to Hannah by Hannah's name'}
        ],
        face: '/images/profile/hannah.jpg',
        anchor: 'hannah',
        flags: [{icon:'flag:ace',name:'ace'},{icon:'flag:aro',name:'aro'},{icon:'flag:demigender',name:'demigender',url:'http://demigenders.tumblr.com/'}],
        social: [
          {
            network: 'facebook'
          },
          {
            network: 'instagram',
            id: 'karibukat'
          },
          {
            network: 'tumblr',
            id: 'riversidesam'
          }
        ]
      },
      {
        name: 'Tiger',
        bio: ['Tiger Strode Aka Sister Ann Tici.........Pation of the rain that really shouldn’t be blamed: order of perpetual indulgence Edinburgh. A kind non judgmental person with a great knowledge of the local and national scene. '],
        role: 'Ordinary Member',
        pronoun: [
          {name:'He', pronouns:'He Him His His Himself'}
        ],
        face: '/images/profile/tiger.jpg',
        anchor: 'tiger',
        flags: [{icon:'flag:drag',name:'Drag'},{icon:'flag:leather',name:'Leather'},{icon:'flag:pan',name:'Pan'},{icon:'flag:pride',name:'Pride'}]
      },
      {
        name: 'Mungo',
        bio: [
          'I\'m a Non-voting Committee Member, that means it\'s my job not to vote.  Nah just kidding, I do general helping out, particularly with the postgrad/mature student side of things when Fraser\'s busy, though the role is fairly general. I\'m doing a PhD in Physics just now and have been in Edinburgh more or less forever so I know the place pretty well.  I also do outdoorsy stuff in a fairly big way so if we repeat any of the BLOGS hill-walks I\'ll probably be leading them, ideally in the direction of a pub. My main aim is to cover the postgrad/ mature student side of things when Fraser\'s not about but do general helping out too.  Some of our events are a bit different, and as ever everyone\'s welcome along, so if you like the idea of hill-walks or golf then join us even if you\'re not postgrad or mature.'
        ],
        role: 'Non-Voting Member',
        pronoun: [
          {name:'He', pronouns:'He Him His His Himself'}
        ],
        face: '/images/profile/mungo.jpg',
        anchor: 'mungo',
        flags: [{icon:'flag:pride',name:'pride'}]
      },



    ];
    var parent = document.getElementById('committee-page');
    for (var i=0;i<committee.length;i++) {
      console.log('committeemember');
      parent.appendChild(new window.BlogsCommitteeMember(committee[i]));
    }
  });

  // Main area's paper-scroll-header-panel custom condensing transformation of
  // the appName in the middle-container and the bottom title in the bottom-container.
  // The appName is moved to top and shrunk on condensing. The bottom sub title
  // is shrunk to nothing on condensing.
  window.addEventListener('paper-header-transform', function(e) {
    var appName = Polymer.dom(document).querySelector('#mainToolbar .app-name');
    var middleContainer = Polymer.dom(document).querySelector('#mainToolbar .middle-container');
    var bottomContainer = Polymer.dom(document).querySelector('#mainToolbar .bottom-container');
    var detail = e.detail;
    var heightDiff = detail.height - detail.condensedHeight;
    var yRatio = Math.min(1, detail.y / heightDiff);
    // appName max size when condensed. The smaller the number the smaller the condensed size.
    var maxMiddleScale = 0.50;
    var auxHeight = heightDiff - detail.y;
    var auxScale = heightDiff / (1 - maxMiddleScale);
    var scaleMiddle = Math.max(maxMiddleScale, auxHeight / auxScale + maxMiddleScale);
    var scaleBottom = 1 - yRatio;

    // Move/translate middleContainer
    Polymer.Base.transform('translate3d(0,' + yRatio * 100 + '%,0)', middleContainer);

    // Scale bottomContainer and bottom sub title to nothing and back
    Polymer.Base.transform('scale(' + scaleBottom + ') translateZ(0)', bottomContainer);

    // Scale middleContainer appName
    Polymer.Base.transform('scale(' + scaleMiddle + ') translateZ(0)', appName);
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onDataRouteClick = function() {
    var drawerPanel = Polymer.dom(document).querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  // Scroll page to top and expand header
  app.scrollPageToTop = function() {
    app.$.headerPanelMain.scrollToTop(true);
  };

})(document);
