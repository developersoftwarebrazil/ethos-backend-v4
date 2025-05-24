import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUsersDTO } from './dtos/update-users-dto';
import { CreateUsersDTO } from './dtos/create-users-dto';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+1-555-123-4567',
      imageUrl: 'https://example.com/images/john_smith.jpg',
      createdAt: '2025-05-08T10:00:00Z',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Emma Johnson',
      email: 'emma.johnson@example.com',
      phone: '+1-555-234-5678',
      imageUrl: 'https://example.com/images/emma_johnson.jpg',
      createdAt: '2025-05-08T10:01:00Z',
      role: 'STUDENT',
    },
    {
      id: 3,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      phone: '+1-555-345-6789',
      imageUrl: 'https://example.com/images/michael_brown.jpg',
      createdAt: '2025-05-08T10:02:00Z',
      role: 'STUDENT',
    },
    {
      id: 4,
      name: 'Sarah Davis',
      email: 'sarah.davis@example.com',
      phone: '+1-555-456-7890',
      imageUrl: 'https://example.com/images/sarah_davis.jpg',
      createdAt: '2025-05-08T10:03:00Z',
      role: 'STUDENT',
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'david.wilson@example.com',
      phone: '+1-555-567-8901',
      imageUrl: 'https://example.com/images/david_wilson.jpg',
      createdAt: '2025-05-08T10:04:00Z',
      role: 'TEACHER',
    },
    {
      id: 6,
      name: 'Lisa Taylor',
      email: 'lisa.taylor@example.com',
      phone: '+1-555-678-9012',
      imageUrl: 'https://example.com/images/lisa_taylor.jpg',
      createdAt: '2025-05-08T10:05:00Z',
      role: 'STUDENT',
    },
    {
      id: 7,
      name: 'James Anderson',
      email: 'james.anderson@example.com',
      phone: '+1-555-789-0123',
      imageUrl: 'https://example.com/images/james_anderson.jpg',
      createdAt: '2025-05-08T10:06:00Z',
      role: 'STUDENT',
    },
    {
      id: 8,
      name: 'Emily Martinez',
      email: 'emily.martinez@example.com',
      phone: '+1-555-890-1234',
      imageUrl: 'https://example.com/images/emily_martinez.jpg',
      createdAt: '2025-05-08T10:07:00Z',
      role: 'TEACHER',
    },
    {
      id: 9,
      name: 'Robert Thomas',
      email: 'robert.thomas@example.com',
      phone: '+1-555-901-2345',
      imageUrl: 'https://example.com/images/robert_thomas.jpg',
      createdAt: '2025-05-08T10:08:00Z',
      role: 'STUDENT',
    },
    {
      id: 10,
      name: 'Jennifer Lee',
      email: 'jennifer.lee@example.com',
      phone: '+1-555-012-3456',
      imageUrl: 'https://example.com/images/jennifer_lee.jpg',
      createdAt: '2025-05-08T10:09:00Z',
      role: 'STUDENT',
    },
    {
      id: 11,
      name: 'William Clark',
      email: 'william.clark@example.com',
      phone: '+1-555-123-4568',
      imageUrl: 'https://example.com/images/william_clark.jpg',
      createdAt: '2025-05-08T10:10:00Z',
      role: 'STUDENT',
    },
    {
      id: 12,
      name: 'Ashley Lewis',
      email: 'ashley.lewis@example.com',
      phone: '+1-555-234-5679',
      imageUrl: 'https://example.com/images/ashley_lewis.jpg',
      createdAt: '2025-05-08T10:11:00Z',
      role: 'STUDENT',
    },
    {
      id: 13,
      name: 'Christopher Walker',
      email: 'christopher.walker@example.com',
      phone: '+1-555-345-6780',
      imageUrl: 'https://example.com/images/christopher_walker.jpg',
      createdAt: '2025-05-08T10:12:00Z',
      role: 'STUDENT',
    },
    {
      id: 14,
      name: 'Amanda Hall',
      email: 'amanda.hall@example.com',
      phone: '+1-555-456-7891',
      imageUrl: 'https://example.com/images/amanda_hall.jpg',
      createdAt: '2025-05-08T10:13:00Z',
      role: 'STUDENT',
    },
    {
      id: 15,
      name: 'Daniel Allen',
      email: 'daniel.allen@example.com',
      phone: '+1-555-567-8902',
      imageUrl: 'https://example.com/images/daniel_allen.jpg',
      createdAt: '2025-05-08T10:14:00Z',
      role: 'STUDENT',
    },
    {
      id: 16,
      name: 'Megan Young',
      email: 'megan.young@example.com',
      phone: '+1-555-678-9013',
      imageUrl: 'https://example.com/images/megan_young.jpg',
      createdAt: '2025-05-08T10:15:00Z',
      role: 'STUDENT',
    },
    {
      id: 17,
      name: 'Steven King',
      email: 'steven.king@example.com',
      phone: '+1-555-789-0124',
      imageUrl: 'https://example.com/images/steven_king.jpg',
      createdAt: '2025-05-08T10:16:00Z',
      role: 'TEACHER',
    },
    {
      id: 18,
      name: 'Lauren Wright',
      email: 'lauren.wright@example.com',
      phone: '+1-555-890-1235',
      imageUrl: 'https://example.com/images/lauren_wright.jpg',
      createdAt: '2025-05-08T10:17:00Z',
      role: 'TEACHER',
    },
    {
      id: 19,
      name: 'Andrew Scott',
      email: 'andrew.scott@example.com',
      phone: '+1-555-901-2346',
      imageUrl: 'https://example.com/images/andrew_scott.jpg',
      createdAt: '2025-05-08T10:18:00Z',
      role: 'TEACHER',
    },
    {
      id: 20,
      name: 'Nicole Green',
      email: 'nicole.green@example.com',
      phone: '+1-555-012-345{SD}',
      imageUrl: 'https://example.com/images/andrew_scott.jpg',
      createdAt: '2025-05-08T10:19:00Z',
      role: '',
    },
  ];
  findAll(role?: 'ADMIN' | 'TEACHER' | 'STUDENT') {
    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (roleArray.length === 0)
        throw new NotFoundException('user role not found');
      return roleArray;
    }
    return this.users;
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }
  createUser(createUsersDTO: CreateUsersDTO) {
    const usersByHighiestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: usersByHighiestId[0].id + 1, ...createUsersDTO };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUsersDTO: UpdateUsersDTO) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUsersDTO };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
