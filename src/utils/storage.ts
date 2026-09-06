import type { UserProfile } from '@/types';

const STORAGE_KEY = 'edumap_users';
const SESSION_KEY = 'edumap_current_user';

export function getAllUsers(): Record<string, UserProfile> {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function saveAllUsers(users: Record<string, UserProfile>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function getUserById(id: string): UserProfile | null {
  const users = getAllUsers();
  return users[id] || null;
}

export function getUserByEmail(email: string): UserProfile | null {
  const users = getAllUsers();
  return Object.values(users).find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

export function saveUser(user: UserProfile): void {
  const users = getAllUsers();
  users[user.id] = user;
  saveAllUsers(users);
  localStorage.setItem(SESSION_KEY, user.id);
}

export function getCurrentUser(): UserProfile | null {
  const id = localStorage.getItem(SESSION_KEY);
  if (!id) return null;
  return getUserById(id);
}

export function setCurrentUserId(id: string): void {
  localStorage.setItem(SESSION_KEY, id);
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}

export function updateUser(updates: Partial<UserProfile>): UserProfile | null {
  const current = getCurrentUser();
  if (!current) return null;
  const updated = { ...current, ...updates };
  saveUser(updated);
  return updated;
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
