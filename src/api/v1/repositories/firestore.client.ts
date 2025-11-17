export const db = {
  collection: (name: string) => ({
    doc: (id?: string) => ({
      get: async () => ({ exists: true, data: () => ({}) }),
      set: async (data: any) => {},
      update: async (...args: any[]) => {},
      delete: async () => {}
    }),
    add: async (data: any) => ({ id: 'mock-id' })
  })
};