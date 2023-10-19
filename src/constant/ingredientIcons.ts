export const ingredientsIcons = (name: string) => {
  let ingredientsIcons = '';
  if (name.includes('chicken')) {
    ingredientsIcons = '🍗';
  } else if (name.includes('chili')) {
    ingredientsIcons = '🌶️';
  } else if (name.includes('powder')) {
    ingredientsIcons = '🧂';
  } else if (name.includes('sauce')) {
    ingredientsIcons = '🍯';
  } else if (name.includes('oil')) {
    ingredientsIcons = '🥃';
  } else if (name.includes('leaves')) {
    ingredientsIcons = '🍃';
  } else if (name.includes('pepper')) {
    ingredientsIcons = '🧂';
  } else if (name.includes('corn')) {
    ingredientsIcons = '🌽';
  } else if (name.includes('beef') || name.includes('pork') || name.includes('lamb') || name.includes('meat') || name.includes('steak')) {
    ingredientsIcons = '🥩';
  } else if (name.includes('egg') || name.includes('eggs') || name.includes('eggplant')) {
    ingredientsIcons = '🥚';
  } else if (name.includes('mushroom')) {
    ingredientsIcons = '🍄';
  } else if (name.includes('bread')) {
    ingredientsIcons = '🍞';
  } else {
    switch (name) {
      case 'milk':
        ingredientsIcons = '🥛';
        break;
      case 'butter':
        ingredientsIcons = '🧈';
        break;
      case 'salt':
      case 'sugar':
      case 'pepper':
        ingredientsIcons = '🧂';
        break;
      case 'yogurt':
        ingredientsIcons = '🥛';
        break;

      case 'cheese':
        ingredientsIcons = '🧀';
        break;
      case 'fish':
        ingredientsIcons = '🐟';
        break;
      case 'shrimp':
        ingredientsIcons = '🦐';
        break;
      case 'rice':
        ingredientsIcons = '🍚';
        break;
      case 'noodle':
        ingredientsIcons = '🍜';
        break;

      case 'onion':
        ingredientsIcons = '🧅';
        break;
      case 'garlic':
        ingredientsIcons = '🧄';
        break;
      case 'tomato':
        ingredientsIcons = '🍅';
        break;
      case 'potato':
        ingredientsIcons = '🥔';
        break;
      case 'vegetable':
        ingredientsIcons = '🥬';
        break;

      case 'fruti':
        ingredientsIcons = '🍎';
        break;
      case 'seafood':
        ingredientsIcons = '🦞';
        break;
      default:
        ingredientsIcons = '🍽️';
        break;
    }
  }
  return ingredientsIcons;
};
