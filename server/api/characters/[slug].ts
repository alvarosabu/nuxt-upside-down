import { characters } from '.'

export default defineEventHandler(event => characters.find(({ slug }) => slug === event.context.params.slug))
