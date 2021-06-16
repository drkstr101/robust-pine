---
stackbit_url_path: /features
template: advanced
seo:
  extra:
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: website
      keyName: property
      name: 'og:type'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: Features
      keyName: property
      name: 'og:title'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: This is the features page
      keyName: property
      name: 'og:description'
    - type: stackbit_page_meta_extra
      relativeUrl: true
      value: images/about-3.jpg
      keyName: property
      name: 'og:image'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: summary_large_image
      keyName: name
      name: 'twitter:card'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: Features
      keyName: name
      name: 'twitter:title'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: This is the features page
      keyName: name
      name: 'twitter:description'
    - type: stackbit_page_meta_extra
      relativeUrl: true
      value: images/about-3.jpg
      keyName: name
      name: 'twitter:image'
  type: stackbit_page_meta
  title: Features
  description: This is the features page
sections:
  - background_image_repeat: no-repeat
    background_image_position: center center
    type: hero_section
    background_image_size: cover
    background_color: primary
    padding_bottom: medium
    has_border: false
    media_width: fifty
    padding_top: medium
    align: left
    media_position: top
    actions: []
    title: Explore Features
    subtitle: Features Page Demo
  - type: features_section
    background_image_repeat: no-repeat
    background_image_size: cover
    background_image_position: center center
    background_color: none
    has_border: false
    padding_bottom: medium
    padding_top: medium
    align: center
    feature_padding_vert: medium
    features:
      - align: left
        media_position: right
        type: feature
        media_width: fifty
        image_alt: Top view of business meeting
        actions: []
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla.
        image: 'https://www.datocms-assets.com/49813/1623787046-about-3.jpg'
        title: Section Title One
        subtitle: 'Odio et tortor laoreet, sed interdum augue ornare. '
      - align: left
        media_position: left
        type: feature
        video_embed_html: >-
          <iframe width="560" height="315"
          src="https://www.youtube.com/embed/aS1aPOOMQMk?modestbranding=1"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media;
          gyroscope; picture-in-picture" allowfullscreen></iframe>
        media_width: fifty
        actions: []
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla.
        title: Section Title Two
        subtitle: 'In fermentum odio et tortor laoreet, sed interdum augue ornare. '
      - align: left
        media_position: right
        type: feature
        media_width: fifty
        image_alt: Happy co-workers
        actions: []
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla.
        image: 'https://www.datocms-assets.com/49813/1623787046-about-1.jpg'
        title: Section Title Three
        subtitle: 'Donec nisl ligula, cursus id molestie vel. '
  - type: grid_section
    background_image_repeat: no-repeat
    background_image_position: center center
    background_image_size: cover
    padding_bottom: medium
    background_color: none
    align: center
    has_border: false
    padding_top: medium
    grid_gap_horiz: medium
    enable_cards: true
    grid_gap_vert: medium
    grid_cols: two
    grid_items:
      - type: grid_item
        image_has_padding: true
        image_align: left
        image_position: top
        image_width: fifty
        image_alt: Item 1 icon
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787048-icon-1.svg'
        actions:
          - type: action
            icon_position: center
            no_follow: false
            new_window: false
            style: link
            has_icon: true
            icon: arrow-right
            label: Learn More
            url: /style-guide
        content_align: left
        title_align: left
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla.
        title: Section Item 1
      - type: grid_item
        image_has_padding: true
        image_align: left
        image_position: top
        image_width: fifty
        image_alt: Item 2 icon
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787048-icon-2.svg'
        actions:
          - type: action
            icon_position: center
            no_follow: false
            new_window: false
            style: link
            has_icon: true
            icon: arrow-right
            label: Learn More
            url: /style-guide
        content_align: left
        title_align: left
        content: >-
          Ac felis donec et odio pellentesque. Sagittis vitae et leo duis ut
          diam quam nulla. Ullamcorper a lacus vestibulum sed arcu non odio
          euismod lacinia.
        title: Section Item 2
      - type: grid_item
        image_has_padding: true
        image_align: left
        image_position: top
        image_width: fifty
        image_alt: Item 3 icon
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787048-icon-3.svg'
        actions:
          - type: action
            icon_position: center
            no_follow: false
            new_window: false
            style: link
            has_icon: true
            icon: arrow-right
            label: Learn More
            url: /style-guide
        content_align: left
        title_align: left
        content: >-
          Ac felis donec et odio pellentesque. Sagittis vitae et leo duis ut
          diam quam nulla. Ullamcorper a lacus vestibulum sed arcu non odio
          euismod lacinia.
        title: Section Item 3
      - type: grid_item
        image_has_padding: true
        image_align: left
        image_position: top
        image_width: fifty
        image_alt: Item 4 icon
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787048-icon-3.svg'
        actions:
          - type: action
            icon_position: center
            no_follow: false
            new_window: false
            style: link
            has_icon: true
            icon: arrow-right
            label: Learn More
            url: /style-guide
        content_align: left
        title_align: left
        content: >-
          Ac felis donec et odio pellentesque. Sagittis vitae et leo duis ut
          diam quam nulla. Ullamcorper a lacus vestibulum sed arcu non odio
          euismod lacinia.
        title: Section Item 4
    actions: []
    subtitle: Grid Section Example
    title: Cards Section
  - type: grid_section
    background_image_repeat: no-repeat
    background_image_position: center center
    background_image_size: cover
    padding_bottom: medium
    background_color: secondary
    align: center
    has_border: false
    padding_top: medium
    grid_gap_horiz: medium
    enable_cards: false
    grid_gap_vert: large
    grid_cols: two
    grid_items:
      - type: grid_item
        image_has_padding: false
        image_align: left
        image_position: left
        image_width: twenty-five
        image_alt: Eleanor Carr
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787049-eleanor-carr.png'
        actions: []
        content_align: left
        title_align: left
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus.


          **Eleanor Carr,** *CTO, Studio*
      - type: grid_item
        image_has_padding: false
        image_align: left
        image_position: left
        image_width: twenty-five
        image_alt: Gordon Norman
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787049-gordon-norman.png'
        actions: []
        content_align: left
        title_align: left
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus.


          **Gordon Norman,** *Web Designer, Studio*
    actions: []
    subtitle: Grid Section Example
    title: Reviews Section
  - background_image_repeat: no-repeat
    type: cta_section
    background_image_position: center center
    background_image_size: cover
    has_border: false
    padding_bottom: medium
    background_color: primary
    padding_top: medium
    actions_width: fourty
    align: left
    actions:
      - type: action
        icon_position: right
        no_follow: false
        new_window: false
        style: primary
        has_icon: false
        label: Compare Plans
        url: /pricing
    content: Ut egestas elementum suscipit. Quisque at hendrerit mauris.
    actions_position: right
    title: This is a Call to Action
title: Features
---
