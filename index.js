module.exports = {
  rules: {
    'type-enum': [2, 'always', [':alembic:', ':alien:', ':ambulance:', ':apple:', ':arrow_down:', ':arrow_up:', ':art:', ':beers:', ':bento:', ':bookmark:', ':boom:', ':bug:', ':building_construction:', ':bulb:', ':busts_in_silhouette:', ':camera_flash:', ':card_file_box:', ':chart_with_upwards_trend:', ':checkered_flag:', ':children_crossing:', ':clown_face:', ':construction:', ':construction_worker:', ':egg:', ':fire:', ':globe_with_meridians:', ':green_apple:', ':green_heart:', ':heavy_minus_sign:', ':heavy_plus_sign:', ':iphone:', ':label:', ':lipstick:', ':lock:', ':loud_sound:', ':mag:', ':mute:', ':ok_hand:', ':package:', ':page_facing_up:', ':pencil2:', ':pencil:', ':penguin:', ':poop:', ':pushpin:', ':recycle:', ':rewind:', ':robot:', ':rocket:', ':rotating_light:', ':see_no_evil:', ':seedling:', ':sparkles:', ':speech_balloon:', ':tada:', ':triangular_flag_on_post:', ':truck:', ':twisted_rightwards_arrows:', ':whale:', ':wheel_of_dharma:', ':wheelchair:', ':white_check_mark:', ':wrench:', ':zap:']],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'always', ['sentence-case']],
    'subject-empty': [2, 'never'],
    'scope-empty': [2, 'always'],
    'subject-full-stop': [2, 'never', ['.']],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never']
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'subject', 'ticket'],
      noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
    }
  }
}
