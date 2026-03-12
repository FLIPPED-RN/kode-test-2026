import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { IUser } from "../types/user.types";
import type { TCategory } from "../types/category.types";

const categoryMap: Record<string, TCategory> = {
  all: "all",
  designers: "design",
  analysts: "analytics",
  managers: "management",
  ios: "ios",
  android: "android",
};

export default function UsersList() {
  const { category = "all" } = useParams<{ category: string }>();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const example = categoryMap[category];
        const url = `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${example}&__dynamic=true`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        setUsers(Array.isArray(data) ? data : data.items || []);
      } catch (err) {
        console.error("ошибочка", err);
      }
    };

    fetchUsers();
  }, [category]);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        {users.map((user) => (
          <div key={user.id} className="flex gap-5">
            <img
              src={'/public/zaglushka.jpg'}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p className="text-gray-600">{user.position}</p>
              <p className="text-sm text-gray-500">{user.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
