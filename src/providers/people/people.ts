import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleProvider {

  people = [
    {
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "name": {
      "first": "Elaine",
      "last": "Brewer"
    },
    "company": "COMVERGES",
    "email": "elaine.brewer@comverges.me",
    "phone": "(917) 570-2114",
    "address": "843 Haring Street, Canterwood, Idaho, 3343",
    "about": "Pariatur proident dolor ipsum proident. Consequat adipisicing consequat et Lorem proident adipisicing. Sit voluptate culpa pariatur reprehenderit ipsum non nisi consectetur officia esse. Do Lorem adipisicing consectetur tempor sit id labore occaecat in Lorem tempor laborum velit. Labore commodo esse occaecat irure et magna non laboris et voluptate exercitation laborum elit adipisicing. Ad ut fugiat deserunt laborum ex."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": {
      "first": "Albert",
      "last": "Sears"
    },
    "company": "DOGTOWN",
    "email": "albert.sears@dogtown.net",
    "phone": "(883) 517-3052",
    "address": "843 Nostrand Avenue, Sabillasville, Illinois, 6920",
    "about": "Cupidatat irure dolore occaecat ex minim sit laborum qui Lorem eu. Tempor aute occaecat commodo laborum sit incididunt mollit id ipsum eu nisi. Aute elit minim ad nisi minim."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "name": {
      "first": "Mendez",
      "last": "Mcbride"
    },
    "company": "IMPERIUM",
    "email": "mendez.mcbride@imperium.name",
    "phone": "(995) 566-2869",
    "address": "264 Knight Court, Bentley, New York, 3888",
    "about": "Dolore do ex consequat ullamco cillum excepteur quis. Est aliquip esse dolor pariatur sit non dolore commodo ullamco et. Nostrud in ad ex est reprehenderit commodo amet ut laboris et ullamco Lorem qui esse. Culpa duis sunt eiusmod sint aute aliqua anim eiusmod sit irure."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "name": {
      "first": "Winters",
      "last": "Mckenzie"
    },
    "company": "ICOLOGY",
    "email": "winters.mckenzie@icology.biz",
    "phone": "(997) 513-3023",
    "address": "191 Eldert Lane, Waterford, District Of Columbia, 4608",
    "about": "Officia proident deserunt nostrud do dolore veniam voluptate mollit qui occaecat veniam adipisicing. Nulla commodo incididunt non enim minim in nisi tempor deserunt sint. Laborum sunt qui cillum deserunt ut cillum quis duis."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": {
      "first": "Waters",
      "last": "Santiago"
    },
    "company": "MEDCOM",
    "email": "waters.santiago@medcom.info",
    "phone": "(920) 460-3283",
    "address": "837 Rockaway Avenue, Babb, Louisiana, 6666",
    "about": "Pariatur duis occaecat ea ad cupidatat excepteur commodo. Laborum proident eiusmod consectetur anim elit et id incididunt anim culpa tempor velit. Ad dolor est nulla nostrud mollit laborum incididunt qui. Incididunt qui culpa cupidatat mollit. Eu Lorem esse est excepteur amet nisi est cillum ullamco ad minim amet sint aliquip. Labore eiusmod incididunt do incididunt anim magna qui anim sit esse ipsum."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "name": {
      "first": "Twila",
      "last": "Horne"
    },
    "company": "VIOCULAR",
    "email": "twila.horne@viocular.us",
    "phone": "(891) 406-2801",
    "address": "177 Gaylord Drive, Walland, Marshall Islands, 9284",
    "about": "Occaecat velit occaecat cupidatat magna tempor ut ex magna aliqua excepteur aliqua tempor consectetur. Deserunt commodo in sunt aute pariatur tempor. Aute aliquip dolor ea eiusmod velit nisi quis."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "name": {
      "first": "Marva",
      "last": "Sparks"
    },
    "company": "COMVEX",
    "email": "marva.sparks@comvex.io",
    "phone": "(833) 552-2685",
    "address": "869 Cornelia Street, Soudan, Maine, 5522",
    "about": "Magna occaecat dolore et duis id aute. Nulla proident duis eiusmod velit consectetur do nulla qui ipsum sint ut reprehenderit culpa ex. Consectetur est aliquip officia ea. Dolore nisi veniam id voluptate Lorem dolore excepteur adipisicing voluptate consectetur ipsum pariatur."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "name": {
      "first": "Lavonne",
      "last": "Browning"
    },
    "company": "DAYCORE",
    "email": "lavonne.browning@daycore.biz",
    "phone": "(871) 442-3696",
    "address": "708 Alabama Avenue, Craig, North Carolina, 9035",
    "about": "Officia nisi eu fugiat tempor excepteur anim culpa. Est sit nulla voluptate quis nisi eu incididunt ut enim Lorem pariatur. Dolor adipisicing culpa adipisicing ad nisi eu aliqua ea ad culpa. Duis commodo excepteur cupidatat commodo ipsum dolore sint deserunt Lorem enim cupidatat sunt non id."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": {
      "first": "Chris",
      "last": "Beasley"
    },
    "company": "GEOLOGIX",
    "email": "chris.beasley@geologix.org",
    "phone": "(829) 410-3871",
    "address": "717 Falmouth Street, Faywood, Vermont, 3699",
    "about": "Exercitation exercitation enim deserunt commodo aute ut incididunt mollit et dolore elit Lorem ex. Excepteur incididunt veniam et minim adipisicing excepteur fugiat do. Reprehenderit minim esse occaecat elit ullamco cillum consequat quis. Anim ad aliqua deserunt do ea culpa do anim amet nulla quis pariatur non elit. Officia sunt ea nostrud nisi id. Laborum et velit culpa cillum commodo amet mollit quis fugiat est. Proident elit esse do aliqua eiusmod dolor ullamco Lorem exercitation exercitation esse Lorem."
    },
    {
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": {
      "first": "Torres",
      "last": "Rosales"
    },
    "company": "ACCUSAGE",
    "email": "torres.rosales@accusage.ca",
    "phone": "(976) 421-2692",
    "address": "321 Lincoln Place, Kaka, Palau, 5777",
    "about": "Incididunt enim commodo dolore dolore velit aliqua consectetur sint occaecat enim sint ipsum ut deserunt. Sint ullamco velit voluptate aliqua in aliqua quis consectetur ad cupidatat cillum incididunt sunt. Magna quis dolor proident dolor quis ea labore eu dolore minim officia. Enim culpa id et commodo in ea consectetur magna id laboris ipsum Lorem excepteur."
    }
  ]

  constructor(public http: Http) {
    console.log('Hello PeopleProvider Provider');
  }

  getPeople(){
    return this.people
  }

}
