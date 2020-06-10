import { Injectable } from '@angular/core';

export class FileSystemItem {
    id: string;
    parentId?: string;
    name: string;
    isDirectory: boolean;
    expanded?: boolean;
}
const itemsDriveD: FileSystemItem[] = [];
const itemsDriveC: FileSystemItem[] = [{
    id: '1',
    name: 'Documents',
    isDirectory: true,
    expanded: true
  }, {
    id: '2',
    parentId: '1',
    name: 'Projects',
    isDirectory: true,
    expanded: true
  }, {
    id: '3',
    parentId: '2',
    name: 'About.rtf',
    isDirectory: false,
    expanded: true
  }, {
    id: '4',
    parentId: '2',
    name: 'Passwords.rtf',
    isDirectory: false,
    expanded: true
  }, {
    id: '5',
    parentId: '2',
    name: 'About.xml',
    isDirectory: false,
    expanded: true
  }, {
    id: '6',
    parentId: '2',
    name: 'Managers.rtf',
    isDirectory: false,
    expanded: true
  }, {
    id: '7',
    parentId: '2',
    name: 'ToDo.txt',
    isDirectory: false,
    expanded: true
  }, {
    id: '8',
    name: 'Images',
    isDirectory: true,
    expanded: true
  }, {
    id: '9',
    parentId: '8',
    name: 'logo.png',
    isDirectory: false,
    expanded: true
  }, {
    id: '10',
    parentId: '8',
    name: 'banner.gif',
    isDirectory: false,
    expanded: true
  }, {
    id: '11',
    name: 'System',
    isDirectory: true,
    expanded: true
  }, {
    id: '12',
    parentId: '11',
    name: 'Employees.txt',
    isDirectory: false,
    expanded: true
  }, {
    id: '13',
    parentId: '11',
    name: 'PasswordList.txt',
    isDirectory: false,
    expanded: true
  }, {
    id: '14',
    name: 'Description.rtf',
    isDirectory: false,
    expanded: true
  }, {
    id: '15',
    name: 'Description.txt',
    isDirectory: false,
    expanded: true
  }];

@Injectable()
export class Service {
    getItemsDriveC(): FileSystemItem[] {
        return itemsDriveC;
    }

    getItemsDriveD(): FileSystemItem[] {
        return itemsDriveD;
    }
}
