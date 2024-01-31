export const getMaxWidth = (width) => {
  switch (width) {
    case 'sm':
      return 'sm:of-max-w-sm'
    case 'xs':
      return 'sm:of-max-w-xs'
    case 'md':
      return 'sm:of-max-w-md'
    case 'lg':
      return 'sm:of-max-w-lg'
    case 'xl':
      return 'sm:of-max-w-xl'
    case '2xl':
      return 'sm:of-max-w-2xl'
    case '4xl':
      return 'sm:of-max-w-4xl'
    case '5xl':
      return 'sm:of-max-w-5xl'
    case '6xl':
      return 'sm:of-max-w-6xl'
    case '7xl':
      return 'sm:of-max-w-7xl'
    default:
      console.log(`modal size of ${width} not implemented yet`)
      return 'sm:of-max-w-md'
  }
}
export const getBadgeSize = (width) => {
  switch (width) {
    case 'xs':
      return 'of-text-xs'
    case 'sm':
      return 'of-text-sm'
    case 'md':
      return 'of-text-base'
    case 'lg':
      return 'of-text-lg'
    case 'xl':
      return 'of-text-xl'
    default:
      console.log(`Size ${width} not implemented yet`)
      return ' of-text-xs'
  }
}
export const getIconButtonSize = (width) => {
  switch (width) {
    case 'xs':
      return 'of-w-6 of-h-6 focus:of-ring-1'
    case 'sm':
      return 'of-w-7 of-h-7 focus:of-ring-2'
    case 'md':
      return 'of-w-8 of-h-8 focus:of-ring-2'
    case 'lg':
      return 'of-w-9 of-h-9 focus:of-ring-2'
    case 'xl':
      return 'of-w-10 of-h-10 focus:of-ring-2'
    case '2xl':
      return 'of-w-11 of-h-11 focus:of-ring-4'
    case '3xl':
      return 'of-w-12 of-h-12 focus:of-ring-4'
    case '4xl':
      return 'of-w-14 of-h-14 focus:of-ring-4'
    case '5xl':
      return 'of-w-16 of-h-16 focus:of-ring-4'
    case '6xl':
      return 'of-w-20 of-h-20 focus:of-ring-4'
    case '7xl':
      return 'of-w-24 of-h-24 focus:of-ring-8'
    default:
      console.log(`Size ${width} not implemented yet`)
      return 'of-w-8 of-h-8 focus:of-ring-2'
  }
}
export const getIconSize = (width) => {
  switch (width) {
    case 'xs':
      return 'of-w-3 of-h-3'
    case 'sm':
      return 'of-w-3.5 of-h-3.5'
    case 'md':
      return 'of-w-4 of-h-4'
    case 'lg':
      return 'of-w-5 of-h-5'
    case 'xl':
      return 'of-w-6 of-h-6'
    case '2xl':
      return 'of-w-7 of-h-7'
    case '3xl':
      return 'of-w-8 of-h-8'
    case '4xl':
      return 'of-w-9 of-h-9'
    case '5xl':
      return 'of-w-10 of-h-10'
    case '6xl':
      return 'of-w-11 of-h-11'
    case '7xl':
      return 'of-w-14 of-h-14'
    default:
      console.log(`Size ${width} not implemented yet`)
      return 'of-w-4 of-h-4'
  }
}
export const getButtonSize = (width) => {
  switch (width) {
    case 'xs':
      return 'of-text-xs'
    case 'sm':
      return 'of-text-sm'
    case 'md':
      return 'of-text-base'
    case 'lg':
      return 'of-text-lg'
    case 'xl':
      return 'of-text-xl'
    default:
      console.log(`Size ${width} not implemented yet`)
      return 'of-text-base'
  }
}
