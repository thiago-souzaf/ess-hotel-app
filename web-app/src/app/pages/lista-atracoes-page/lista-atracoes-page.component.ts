import { Component } from '@angular/core';
import { Atracao } from '../atracao-page/atracao';

@Component({
  selector: 'app-lista-atracoes-page',
  templateUrl: './lista-atracoes-page.component.html',
  styleUrls: ['./lista-atracoes-page.component.scss'],
})
export class ListaAtracoesPageComponent {
  atracoes: Atracao[] = [
    {
      id: '11a24b90',
      name: 'Passeio de 1 dia com almoço em Angra dos Reis',
      images: [
        { url: 'assets/images/atracao-1/1.jpg', alt: 'photo-1' },
        { url: 'assets/images/atracao-1/2.jpg', alt: 'photo 2' },
        { url: 'assets/images/atracao-1/3.jpg', alt: 'photo 3' },
        { url: 'assets/images/atracao-1/4.jpg', alt: 'photo 4' },
        { url: 'assets/images/atracao-1/5.jpg', alt: 'photo 5' },
      ],
      title:
        'Um passeio para descobrir a costa e fazer um passeio de barco pelas ilhas locais',
      descriptions: [
        'Este passeio lhe dará a oportunidade de viajar para a cidade litorânea de Angra dos Reis e explorar a baía.',
        'Você partirá do Rio de Janeiro e fará um passeio de carro pela Costa Verde. Ao chegar em Angra dos Reis, você irá até o porto, onde poderá embarcar em um cruzeiro de barco de 4 horas ao redor da Ilha Grande. Você vai parar em 3 locais deslumbrantes para nadar e fazer mergulho com snorkel nas águas cristalinas e descobrir seus habitantes marinhos.',
        'Durante o cruzeiro, você também terá a oportunidade de conhecer a história da ilha e da baía. O capitão ancorará em uma pequena ilha, onde você poderá almoçar em um restaurante acolhedor. No final do passeio, você voltará ao porto de Angra dos Reis e seguirá para o Rio de Janeiro.',
      ],
      location: 'Hotel Accomodare',
      day: 'Segunda, 13 de Abril de 2023',
      hour: 'Início: 07:00',
    },
    {
      id: '6cd29efa',
      name: 'Passeio ao Cristo Redentor e Pão de Açúcar',
      images: [
        { url: 'assets/images/atracao-1/1.jpg', alt: 'photo-1' },
        { url: 'assets/images/atracao-1/2.jpg', alt: 'photo 2' },
        { url: 'assets/images/atracao-1/3.jpg', alt: 'photo 3' },
        { url: 'assets/images/atracao-1/4.jpg', alt: 'photo 4' },
        { url: 'assets/images/atracao-1/5.jpg', alt: 'photo 5' },
      ],
      title:
        'Um passeio de meio dia para explorar dois pontos turísticos famosos do Rio',
      descriptions: [
        'Este passeio guiado de meio dia lhe dará a chance de explorar algumas das principais atrações do Rio de Janeiro de uma só vez.',
        'Primeiro, você fará um passeio de teleférico para chegar ao topo do Pão de Açúcar. Você poderá apreciar as vistas do litoral e da Mata Atlântica. Na sequência, você embarcará em uma minivan e viajará pela Estrada das Paineiras através do Parque Nacional da Tijuca até o Monte Corcovado, onde está situada a estátua do Cristo Redentor. Você terá a oportunidade de tirar fotos do famoso monumento e apreciar o panorama da cidade.',
      ],
      location:
        'Hotel Rio Othon Palace, 5º floor, Av. Atlântica 3264, Copacabana, Rio de Janeiro, 22070-001',
      day: 'Segunda, 13 de Abril de 2023',
      hour: 'Início: 07:00',
    },
  ];
}
