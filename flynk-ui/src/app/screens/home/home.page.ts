import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonItem, IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFabButton, IonFab, IonItem, IonList, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}

  names: string[] = [
    "Liam", "Olivia", "Noah", "Emma", "Oliver", "Ava", 
    "Elijah", "Sophia", "William", "Isabella", "James", "Mia", 
    "Benjamin", "Amelia", "Lucas", "Harper", "Henry", "Evelyn", 
    "Alexander", "Luna", "Mason", "Charlotte", "Michael", "Ella", 
    "Ethan", "Avery", "Jacob", "Scarlett", "Daniel", "Grace"
  ];
}
