---
stackbit_url_path: /general-enquiries
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
      value: General Enquiries
      keyName: property
      name: 'og:title'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: This is the general enquiries page
      keyName: property
      name: 'og:description'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: summary
      keyName: name
      name: 'twitter:card'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: General Enquiries
      keyName: name
      name: 'twitter:title'
    - type: stackbit_page_meta_extra
      relativeUrl: false
      value: This is the general enquiries page
      keyName: name
      name: 'twitter:description'
  type: stackbit_page_meta
  title: General Enquiries
  description: This is the general enquiries page
sections:
  - background_image_repeat: no-repeat
    background_image_position: center center
    type: hero_section
    background_image_size: cover
    background_color: none
    padding_bottom: medium
    has_border: false
    media_width: fifty
    padding_top: medium
    align: center
    media_position: top
    actions: []
    title: This is the Hero
    subtitle: The optional subtitle
  - background_image_repeat: no-repeat
    type: form_section
    background_image_size: cover
    background_image_position: center center
    background_color: primary
    has_border: false
    padding_bottom: medium
    form_fields:
      - type: form_field
        is_required: true
        default_value: Your name
        label: Name
        input_type: text
        name: name
      - type: form_field
        is_required: true
        default_value: Your email address
        label: Email
        input_type: email
        name: email
      - type: form_field
        is_required: false
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
        label: Subject
        input_type: select
        name: subject
      - type: form_field
        is_required: false
        default_value: Your message
        label: Message
        input_type: textarea
        name: message
      - type: form_field
        is_required: true
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        input_type: checkbox
        name: consent
    padding_top: medium
    align_vert: top
    submit_label: Send Message
    form_action: /thank-you
    form_id: contact-form
    form_width: fifty
    form_layout: inline
    enable_card: true
    form_position: right
    content: >-
      ### Billing

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
      fringilla, fringilla.

      ### Privacy

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
      fringilla, fringilla.
    title_align: left
    content_align: left
title: General enquiries
---
