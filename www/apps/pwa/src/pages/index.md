---
stackbit_url_path: /
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
      value: Micro Frontends | by Watheia Labs
      keyName: property
      name: 'og:title'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: We build micro frontends!
      keyName: property
      name: 'og:description'
    - type: stackbit_page_meta_extra
      relativeUrl: true
      value: images/wa-card.png
      keyName: property
      name: 'og:image'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: summary_large_image
      keyName: name
      name: 'twitter:card'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: Stackbit DIY Theme
      keyName: name
      name: 'twitter:title'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: The preview of the DIY theme
      keyName: name
      name: 'twitter:description'
    - type: stackbit_page_meta_extra
      relativeUrl: true
      value: images/diy-preview.png
      keyName: name
      name: 'twitter:image'
  type: stackbit_page_meta
sections:
  - background_image_repeat: no-repeat
    background_image_position: center center
    type: hero_section
    background_image: 'https://www.datocms-assets.com/49813/1623818056-banner-bg.svg'
    background_image_size: cover
    background_color: primary
    padding_bottom: large
    has_border: false
    media_width: fifty
    padding_top: large
    align: left
    media_position: left
    image: 'https://www.datocms-assets.com/49813/1623787047-hero.png'
    image_alt: Hero section placeholder image
    actions:
      - type: action
        icon_position: right
        no_follow: false
        new_window: false
        style: primary
        has_icon: false
        label: Get Support
        url: /contact
      - type: action
        icon_position: right
        no_follow: false
        new_window: false
        style: secondary
        has_icon: false
        label: Learn More
        url: /features
    title: Watheia Labs
    content: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel.
    subtitle: We build micro frontends!
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
    enable_cards: false
    grid_gap_vert: medium
    grid_cols: four
    grid_items:
      - type: grid_item
        image_has_padding: false
        image_align: center
        image_position: top
        image_width: fifty
        image_alt: Contentful logo
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787050-logo-1.svg'
        actions: []
        content_align: left
        title_align: left
      - type: grid_item
        image_has_padding: false
        image_align: center
        image_position: top
        image_width: fifty
        image_alt: Netlify logo
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787050-logo-2.svg'
        actions: []
        content_align: left
        title_align: left
      - type: grid_item
        image_has_padding: false
        image_align: center
        image_position: top
        image_width: fifty
        image_alt: Gatsby logo
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787051-logo-3.svg'
        actions: []
        content_align: left
        title_align: left
      - type: grid_item
        image_has_padding: false
        image_align: center
        image_position: top
        image_width: fifty
        image_alt: Sanity logo
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787051-logo-4.svg'
        actions: []
        content_align: left
        title_align: left
      - type: grid_item
        image_has_padding: false
        image_align: center
        image_position: top
        image_width: fifty
        image_alt: DatoCMS logo
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787051-logo-5.svg'
        actions: []
        content_align: left
        title_align: left
      - type: grid_item
        image_has_padding: false
        image_align: center
        image_position: top
        image_width: fifty
        image_alt: Next.js logo
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787051-logo-6.svg'
        actions: []
        content_align: left
        title_align: left
      - type: grid_item
        image_has_padding: false
        image_align: center
        image_position: top
        image_width: fifty
        image_alt: Gridsome logo
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787051-logo-7.svg'
        actions: []
        content_align: left
        title_align: left
      - type: grid_item
        image_has_padding: false
        image_align: center
        image_position: top
        image_width: fifty
        image_alt: Git logo
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787051-logo-8.svg'
        actions: []
        content_align: left
        title_align: left
    actions: []
    subtitle: Grid Section Example
    title: Image Grid
  - features:
      - align: left
        media_position: right
        type: feature
        media_width: fifty
        image_alt: Feature 1 graphic
        actions:
          - type: action
            icon_position: right
            no_follow: false
            new_window: false
            style: primary
            has_icon: true
            icon: arrow-right
            label: Learn More
            url: /style-guide
        content: >-
          Our open DevOps platform is a single application for unparalleled
          collaboration, visibility, and development velocity.
        image: 'https://www.datocms-assets.com/49813/1623814546-hero-enterprise.svg'
        title: Cloud-Native DevOps
        subtitle: Deliver features faster
      - align: left
        media_position: left
        type: feature
        media_width: fifty
        image_alt: Feature 2 placeholder image
        actions:
          - type: action
            icon_position: right
            no_follow: false
            new_window: false
            style: primary
            has_icon: true
            icon: arrow-right
            label: Learn More
            url: /style-guide
        content: >-
          Let your components drive web application delivery at global scale.
          Enjoy world-class performance, security and support every step of the
          way.
        image: 'https://www.datocms-assets.com/49813/1623787047-feature-2.png'
        title: Micro Frontends
        subtitle: Increase customer focus
      - align: left
        media_position: right
        type: feature
        media_width: fifty
        image_alt: Feature 3 placeholder image
        actions:
          - type: action
            icon_position: right
            no_follow: false
            new_window: false
            style: primary
            has_icon: true
            icon: arrow-right
            label: Learn More
            url: /style-guide
        content: >-
          Ac felis donec et odio pellentesque. Sagittis vitae et leo duis ut
          diam quam nulla. Ullamcorper a lacus vestibulum sed arcu non odio
          euismod lacinia.
        image: 'https://www.datocms-assets.com/49813/1623787047-feature-3.png'
        title: Test Automation
        subtitle: Do more with less
    type: features_section
    background_image_repeat: no-repeat
    background_image_size: cover
    background_image_position: center center
    background_color: secondary
    has_border: false
    padding_bottom: medium
    padding_top: medium
    align: center
    feature_padding_vert: large
    title: Capabilities
    subtitle: Here's a taste of what we have to offer
  - features:
      - align: left
        media_position: right
        type: feature
        media_width: thirty-three
        image_alt: Brandon Guidelines
        actions: []
        image: 'https://www.datocms-assets.com/49813/1623787047-brandon-guidelines.png'
        title: >-
          “Stackbit is fast! Themes are always up to date. It’s easy to use
          across the organization, and collaboration is easy.”
        subtitle: 'Brandon Guidelines, Sr. Design Manager at Company'
    type: features_section
    background_image_repeat: no-repeat
    background_image_size: cover
    background_image_position: center center
    background_color: primary
    has_border: false
    padding_bottom: medium
    padding_top: medium
    align: center
    feature_padding_vert: small
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
    grid_gap_vert: small
    grid_cols: three
    grid_items:
      - type: grid_item
        image_has_padding: true
        image_align: left
        image_position: top
        image_width: fifty
        image_alt: Section item 1 icon
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
        image_alt: Section item 2 icon
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
        image_alt: Section item 3 icon
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
    actions: []
    subtitle: Grid Section Example
    title: Cards Grid Section
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
        image_alt: Hanson Deck
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787050-hanson-deck.png'
        actions: []
        content_align: left
        title_align: left
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus.


          **Hanson Deck,** *App Developer, Studio*
      - type: grid_item
        image_has_padding: false
        image_align: left
        image_position: left
        image_width: twenty-five
        image_alt: Miles Tone
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787052-miles-tone.png'
        actions: []
        content_align: left
        title_align: left
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus.


          **Miles Tone,** *CEO, Studio*
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
    padding_bottom: large
    background_color: primary
    padding_top: large
    actions_width: fourty
    align: left
    actions:
      - type: action
        icon_position: right
        no_follow: false
        new_window: false
        style: secondary
        has_icon: false
        label: Learn More
        url: /features
    content: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
      fringilla, fringilla.
    actions_position: right
    title: This is Call To Action Section In DIY Theme!
  - type: grid_section
    background_image_repeat: no-repeat
    background_image_position: center center
    background_image_size: cover
    padding_bottom: medium
    background_color: secondary
    align: center
    has_border: false
    padding_top: medium
    grid_gap_horiz: small
    enable_cards: false
    grid_gap_vert: small
    grid_cols: four
    grid_items:
      - type: grid_item
        image_has_padding: false
        image_align: left
        image_position: top
        image_width: fifty
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787050-gustav-purpleson.jpg'
        actions: []
        content_align: left
        title_align: center
        subtitle: Co-Founder & CEO
        title: Gustav Purpleson
      - type: grid_item
        image_has_padding: false
        image_align: left
        image_position: top
        image_width: fifty
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787049-dianne-ameter.jpg'
        actions: []
        content_align: left
        title_align: center
        subtitle: Software Engineer
        title: Dianne Ameter
      - type: grid_item
        image_has_padding: false
        image_align: left
        image_position: top
        image_width: fifty
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787050-hugh-saturation.jpg'
        actions: []
        content_align: left
        title_align: center
        subtitle: Developer Advocate
        title: Hugh Saturation
      - type: grid_item
        image_has_padding: false
        image_align: left
        image_position: top
        image_width: fifty
        actions_width: auto
        actions_align: left
        image: 'https://www.datocms-assets.com/49813/1623787050-hilary-ouse.jpg'
        actions: []
        content_align: left
        title_align: center
        subtitle: Operations Manager
        title: Hilary Ouse
    actions:
      - type: action
        icon_position: right
        no_follow: false
        new_window: false
        style: primary
        has_icon: false
        label: Join the team
        url: /style-guide
    subtitle: Grid Section Example
    title: Team Section
  - type: blog_feed_section
    background_image_repeat: no-repeat
    background_image_position: center center
    background_image_size: cover
    background_color: none
    padding_top: medium
    padding_bottom: medium
    has_border: false
    show_image: true
    align: center
    show_author: true
    show_excerpt: false
    show_date: true
    show_categories: true
    recent_count: 3
    show_recent: true
    enable_cards: true
    blog_feed_cols: three
    actions:
      - type: action
        icon_position: right
        no_follow: false
        new_window: false
        style: primary
        has_icon: false
        label: View All
        url: /blog
    title: What's New
    subtitle: Blog Feed Section Example
  - background_image_repeat: no-repeat
    type: cta_section
    background_image_position: center center
    background_image_size: cover
    has_border: false
    padding_bottom: large
    background_color: secondary
    padding_top: large
    actions_width: fourty
    align: center
    actions:
      - type: action
        icon_position: right
        no_follow: false
        new_window: false
        style: primary
        has_icon: false
        label: Button
        url: /pricing
    content: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
      fringilla, fringilla.
    actions_position: bottom
    title: This is Call To Action Section In DIY Theme!
title: Home
---
