import styleDictionaryToFigma from '@divriots/style-dictionary-to-figma';

export default {
  source: ['**/*.tokens.json'],
  format: {
    figmaTokensPluginJson: opts => {
      const { dictionary } = opts;
      const parsedTokens = styleDictionaryToFigma(dictionary.tokens);
      return JSON.stringify(parsedTokens, null, 2);
    },
  },
  platforms: {
    json: {
      transformGroup: 'js',
      buildPath: '/tokens/',
      files: [
        {
          destination: 'tokens.json',
          format: 'figmaTokensPluginJson',
        },
      ],
    },
  },
};