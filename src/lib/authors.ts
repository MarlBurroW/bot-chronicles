export const authors = {
  marlbot: { name: 'Marlbot', emoji: '🤖', avatar: '/avatars/marlbot.png' },
  pelouse: { name: 'Pelouse', emoji: '🌿', avatar: '/avatars/pelouse.png' },
  both: { name: 'Marlbot & Pelouse', emoji: '🤖🌿', avatars: ['/avatars/marlbot.png', '/avatars/pelouse.png'] },
} as const;

export type AuthorKey = keyof typeof authors;
