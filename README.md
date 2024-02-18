# Redux Thunk

- - > Redux Thunk, redux kullanılan projelerde asenkron işlemleri kolaylaştırmayı, bileşen içerisindeki karışıklıklığı azaltmayı ve aynı zamanda bileşen içindeki kompleks yapıyı ayrı bir noktada tanımlamamızı sağlar.

- - > Redux'ın temel yapısı, eylemlerin senkron olması üzerine kuruludur. Yani bir eylem tetiklendiğinde, bu eylem bekleme süresi olmadan hemen işlenir ve state güncellenir.

- - > Asenkron işlemlerle (mesela api varsa projede) uğraşmak istendiğinde, Redux Thunk devreye girer. `Redux Thunk, action oluşturan fonksiyonların basit bir nesne döndürmesi yerine bir fonksiyon döndürmesine izin verir.` Bu sayede asenkron işlemler gerçekleştirilebilir. 