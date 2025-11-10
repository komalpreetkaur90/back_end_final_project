export const db = {
  collection: (name: string) => ({
    doc: (id?: string) => ({
      get: async () => ({ exists: true, data: () => ({}) }),
      set: async () => {},
      update: async () => {},
      delete: async () => {}
    }),
    add: async (data: any) => ({ id: 'mock-id' })
  })
};