### Gerekli Kurulumlar

* Angular 17+
* Node

## Nasıl Çalıştırılır?

> #### Projenin çalıştırabilmesi için terminalde aşağıdaki komutların çalıştırılması gerekmektedir:
* `npm install`
> #### Ardından uygulamanın çalışır hale gelebilmesi için aşağıdaki kod parçası terminalde çalıştırılmalıdır:
* `ng serve`
> #### Bu komutların ardından uygulama *[localhost:4200](http://localhost:4200/)* portunda çalışır hale gelmektedir.


## Uygulama Ne Yapar?
* *[localhost:4200/](http://localhost:4200/)* adresinde anasayfamız bulunmaktadır burada karakterlerin bulunduğu resim ve karakterle gitmeniz için buton bulunmaktadır aynı zamanda sol tarafta bulunan sidebardan da karakterlere gidilebilir.
* *[localhost:4200/character](http://localhost:4200/character)* adresinden eklenmiş olan tüm karakterleri listeleyebilirsiniz. Karakterler default id olarak sıralanmış halde gelir. Karakter kart kart olacak şekilde listelenmiştir. Bu kartlarda karakterlerin bilgileri bulunmaktadır. Detay butonuna basarkta karakter detayına gidebilirsiniz. Karakterli cinsiyetine(kadın , erkek, cinsiyetsiz, bilinmiyor) statusüne (ölü , yaşıyor , bilinmiyor) ve tipine (insan , uzaylı , hayvan , vb...) göre filtreleyebilirsiniz. Bu filtreler birbirileriyle aynı anda çalışabilir. Aynı zamanda karakterli ismini yazarakta arayabilirsiniz. Karakterler sayfada 20 şerli olarak listelenir . Karakterlerin sayfaları aralarında gezinebilirsiniz. 
* *[localhost:4200/character/id](http://localhost:4200/character/id)* adresinden karakterlerin detaylarına ulaşabilirsiniz. Id kısmına yazdığınız karakterin detayı listelenir. Her karakterin detayına [localhost:4200/character] adresinde bulunan detay butonundan ulaşabilirsiniz.

## Uygulama İle İlgili Notlar

* Proje ilk ayağa kaldırıldığında anasayfa açılır. Karakter sayfasında tüm karakterler rickandmortyapi servisinden çekilir.
* Search butonu koyulmamıştır onun yerine seçim yapıldığı anda filtreleme yapılması sağlanmıştır.
* Filtreleri kaldırmak için filtre butonlarını default hale getirmeniz yeterli. (Gender , Type , Status , Name)
