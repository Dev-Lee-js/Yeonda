import { Connection } from 'mysql2/promise';

export const transactionWrapper = async (conn: Connection, callback: () => Promise<any>): Promise<any> => {
  try {
    await conn.beginTransaction();
    const response = await callback();
    await conn.commit();
    return response;
  } catch (error) {
    await conn.rollback();
    throw error;
  }
};
