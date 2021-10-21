module.exports = {
  rules: {
    'type-enum': [2, 'always', [':adhesive_bandage:', ':alembic:', ':alien:', ':ambulance:', ':arrow_down:', ':arrow_up:', ':art:', ':beers:', ':bento:', ':bookmark:', ':boom:', ':bug:', ':building_construction:', ':bulb:', ':busts_in_silhouette:', ':camera_flash:', ':card_file_box:', ':chart_with_upwards_trend:', ':children_crossing:', ':clown_face:', ':coffin:', ':construction:', ':construction_worker:', ':dizzy:', ':egg:', ':fire:', ':globe_with_meridians:', ':goal_net:', ':green_heart:', ':hammer:', ':heavy_minus_sign:', ':heavy_plus_sign:', ':iphone:', ':label:', ':lipstick:', ':lock:', ':loud_sound:', ':mag:', ':memo:', ':monocle_face:', ':mute:', ':necktie:', ':package:', ':page_facing_up:', ':passport_control:', ':pencil2:', ':poop:', ':pushpin:', ':recycle:', ':rewind:', ':rocket:', ':rotating_light:', ':see_no_evil:', ':seedling:', ':sparkles:', ':speech_balloon:', ':tada:', ':test_tube:', ':triangular_flag_on_post:', ':truck:', ':twisted_rightwards_arrows:', ':wastebasket:', ':wheelchair:', ':white_check_mark:', ':wrench:', ':zap:']],
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
