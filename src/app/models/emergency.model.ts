export interface Emergency {
  id: string;
  requester: {
    name: string;
    cpf: string;
    phone: string;
    address: string;
  };
  attendant?: {
    name: string;
    cpf: string;
    phone: string;
  };
  type: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  requesterId: string;
  attendantId?: string;
  message?: string;
  read?: boolean;
}
