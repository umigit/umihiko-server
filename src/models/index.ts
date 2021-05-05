import { User } from './user';
import { Image } from './image';
import { Database } from './database';
import { Framework } from './framework';
import { OperatingSystem } from './operating-system';
import { ProgramingLanguage } from './programing-language';
import { Service } from './service';
import { Tool } from './tool';

export const Models = {
  User,
  Image,
  Database,
  Framework,
  OperatingSystem,
  ProgramingLanguage,
  Service,
  Tool,
};

(Object.keys(Models) as (keyof typeof Models)[]).forEach((key) => {
  Models[key].associate(Models);
});

export {
  User,
  Image,
  Database,
  Framework,
  OperatingSystem,
  ProgramingLanguage,
  Service,
  Tool,
};
