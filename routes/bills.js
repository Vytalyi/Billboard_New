var Bill = require("./models/bill").Bill;

module.exports = {
    init: function () {

        var getRandomDate = function getRandomDate() {
            var start = new Date(2012, 0, 1)
                , end = new Date();
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
        };
        var getRandomViews = function () {
            return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
        };

        Bill.collection.count({}, function(err, count) {
            if (count <= 0) {
                new Bill({ title: "samsung galaxy S3 i9300,білий,UCRF,весь комплект+страховий поліс. samsung galaxy S3 i9300,білий,UCRF,весь комплект+страховий поліс.", message: "Продам samsung galaxy с3 i9300,білий.Стан телефона практично ідеальний 4+на екрані наклеяна плівка.Є повний комплект,кроме гарнітури.Сертифікований.Обмін не цікавить.Телефонуйте.Продаж у Львові та Івано-Франківську,або відправлю по передоплаті.", tags: "Телефоны, Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "тел. 0677216809"}).save();
                new Bill({ title: "Билайн 29+ опт и розница", message: "Билайн 29+ опт и розница. Налетай, торопись, покупай живопись...", tags: "Смартфоны, Телефоны", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx" }).save();
                new Bill({ title: "Чехол для Iphone 5/5S Ультратонкий 0,5 мм из полупрозрачного пластика", message: "Идеальная защита для Вашего Iphon'a 5/5S Цвета как на фото", tags: "Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx" }).save();
                new Bill({ title: "HTC one Обмен на Samsung Galaxy Note 3 N900 с моей доплатой", message: "Телефон как новый. Гарантия до 11.2014. Чехол в подарок! Цвет - чёрный Обмен на Samsung Galaxy Note 3 N900 с моей доплатой. Цена не продажу - 3700", tags: "Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx"}).save();
                new Bill({ title: "HTC desire sv б/у HTC desire sv б/у HTC desire sv б/у HTC desire sv б/у HTC desire sv б/у HTC desire sv б/у HTC desire sv б/у", message: "Экран 4.3 (480x800, сенсорный) Super LCD 2/ моноблок / процессор 1 ГГц / ОЗУ 768 МБ / ПЗУ 4 ГБ + поддержка microSD / камера 8 Мп / Bluetooth / Wi-Fi / поддержка 3G / разъем 3.5 мм / GPS / поддержка 2х СИМ-карт / ОС Android 4.0 (Ice Cream Sandwich) / 129.74 х 67.9 х 10.7 мм, 131 г / черный Подробнее: http://rozetka.com.ua/htc_desire_sv_t326e_black/p247406/", tags: "БУ, Смартфоны", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "тел. 0677216809"}).save();
                new Bill({ title: "Эксклюзивный Телефон Bellperre", message: "Марка телефона Bellpere, на базе Nokia, очень хороший и удобный телефон для серьезных лиц. Телефон полностью цел и полностью идеален, без единой царапины на всем корпусе, экране.. Брался 1 год назад за 3200$, срочно нужны деньги продаю за 8900 грн. + торг возможен но не сильный т.к и так много уступаю. К телефону полагается (Зарядка), коробка отсутствует т.к ее потеряли, телефон полностью чистый (не краденный, не ворованный, не поломанный) просто после того как переехали с семьей в другой дом, коробка была потеряна. ЦЕНА СНИЖЕНА ! БОЛЬШЕ СНИЖАТЬСЯ НЕ БУДЕТ !", tags: "Техника, Эксклюзив", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxx xx"}).save();
                new Bill({ title: "samsung galaxy S3 i9300,білий,UCRF,весь комплект+страховий поліс. samsung galaxy S3 i9300,білий,UCRF,весь комплект+страховий поліс.", message: "Продам samsung galaxy с3 i9300,білий.Стан телефона практично ідеальний 4+на екрані наклеяна плівка.Є повний комплект,кроме гарнітури.Сертифікований.Обмін не цікавить.Телефонуйте.Продаж у Львові та Івано-Франківську,або відправлю по передоплаті.", tags: "Телефоны, Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "тел. 0677216809"}).save();
                new Bill({ title: "Билайн 29+ опт и розница", message: "Билайн 29+ опт и розница. Налетай, торопись, покупай живопись...", tags: "Смартфоны, Телефоны", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx" }).save();
                new Bill({ title: "Чехол для Iphone 5/5S Ультратонкий 0,5 мм из полупрозрачного пластика", message: "Идеальная защита для Вашего Iphon'a 5/5S Цвета как на фото", tags: "Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx" }).save();
                new Bill({ title: "HTC one Обмен на Samsung Galaxy Note 3 N900 с моей доплатой", message: "Телефон как новый. Гарантия до 11.2014. Чехол в подарок! Цвет - чёрный Обмен на Samsung Galaxy Note 3 N900 с моей доплатой. Цена не продажу - 3700", tags: "Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx"}).save();
                new Bill({ title: "HTC desire sv б/у", message: "Экран 4.3 (480x800, сенсорный) Super LCD 2/ моноблок / процессор 1 ГГц / ОЗУ 768 МБ / ПЗУ 4 ГБ + поддержка microSD / камера 8 Мп / Bluetooth / Wi-Fi / поддержка 3G / разъем 3.5 мм / GPS / поддержка 2х СИМ-карт / ОС Android 4.0 (Ice Cream Sandwich) / 129.74 х 67.9 х 10.7 мм, 131 г / черный Подробнее: http://rozetka.com.ua/htc_desire_sv_t326e_black/p247406/", tags: "БУ, Смартфоны", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "тел. 0677216809"}).save();
                new Bill({ title: "Эксклюзивный Телефон Bellperre", message: "Марка телефона Bellpere, на базе Nokia, очень хороший и удобный телефон для серьезных лиц. Телефон полностью цел и полностью идеален, без единой царапины на всем корпусе, экране.. Брался 1 год назад за 3200$, срочно нужны деньги продаю за 8900 грн. + торг возможен но не сильный т.к и так много уступаю. К телефону полагается (Зарядка), коробка отсутствует т.к ее потеряли, телефон полностью чистый (не краденный, не ворованный, не поломанный) просто после того как переехали с семьей в другой дом, коробка была потеряна. ЦЕНА СНИЖЕНА ! БОЛЬШЕ СНИЖАТЬСЯ НЕ БУДЕТ !", tags: "Техника, Эксклюзив", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxx xx"}).save();
                new Bill({ title: "samsung galaxy S3 i9300,білий,UCRF,весь комплект+страховий поліс. samsung galaxy S3 i9300,білий,UCRF,весь комплект+страховий поліс. samsung galaxy S3 i9300,білий,UCRF,весь комплект+страховий поліс.", message: "Продам samsung galaxy с3 i9300,білий.Стан телефона практично ідеальний 4+на екрані наклеяна плівка.Є повний комплект,кроме гарнітури.Сертифікований.Обмін не цікавить.Телефонуйте.Продаж у Львові та Івано-Франківську,або відправлю по передоплаті.", tags: "Телефоны, Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "тел. 0677216809"}).save();
                new Bill({ title: "Билайн 29+ опт и розница", message: "Билайн 29+ опт и розница. Налетай, торопись, покупай живопись...", tags: "Смартфоны, Телефоны", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx" }).save();
                new Bill({ title: "Чехол для Iphone 5/5S Ультратонкий 0,5 мм из полупрозрачного пластика", message: "Идеальная защита для Вашего Iphon'a 5/5S Цвета как на фото", tags: "Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx" }).save();
                new Bill({ title: "HTC one Обмен на Samsung Galaxy Note 3 N900 с моей доплатой", message: "Телефон как новый. Гарантия до 11.2014. Чехол в подарок! Цвет - чёрный Обмен на Samsung Galaxy Note 3 N900 с моей доплатой. Цена не продажу - 3700", tags: "Техника", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxxx, 09x xxx xxxx"}).save();
                new Bill({ title: "HTC desire sv б/у", message: "Экран 4.3 (480x800, сенсорный) Super LCD 2/ моноблок / процессор 1 ГГц / ОЗУ 768 МБ / ПЗУ 4 ГБ + поддержка microSD / камера 8 Мп / Bluetooth / Wi-Fi / поддержка 3G / разъем 3.5 мм / GPS / поддержка 2х СИМ-карт / ОС Android 4.0 (Ice Cream Sandwich) / 129.74 х 67.9 х 10.7 мм, 131 г / черный Подробнее: http://rozetka.com.ua/htc_desire_sv_t326e_black/p247406/", tags: "БУ, Смартфоны", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "тел. 0677216809"}).save();
                new Bill({ title: "Эксклюзивный Телефон Bellperre", message: "Марка телефона Bellpere, на базе Nokia, очень хороший и удобный телефон для серьезных лиц. Телефон полностью цел и полностью идеален, без единой царапины на всем корпусе, экране.. Брался 1 год назад за 3200$, срочно нужны деньги продаю за 8900 грн. + торг возможен но не сильный т.к и так много уступаю. К телефону полагается (Зарядка), коробка отсутствует т.к ее потеряли, телефон полностью чистый (не краденный, не ворованный, не поломанный) просто после того как переехали с семьей в другой дом, коробка была потеряна. ЦЕНА СНИЖЕНА ! БОЛЬШЕ СНИЖАТЬСЯ НЕ БУДЕТ !", tags: "Техника, Эксклюзив", createdDate: getRandomDate(), viewCount: getRandomViews(), contacts: "09x xxx xxx xx"}).save();
            }
        });

    },

    getAll: function (req, res) {
        var sort = req.param("sort"),
            query = Bill.find();

        // sort results if needed
        if (sort === "recent") {
            query.sort('-createdDate');
        } else if (sort === "popular") {
            query.sort('-viewCount');
        }

        query.exec(function(error, bills){
            res.send(JSON.stringify(bills));
        });

    },

    get: function (req, res) {
        var id = req.params.id,
            query = Bill.findOne({ _id: id });

        query.exec(function (err, bill) {
            res.send(JSON.stringify(bill));

            // views analytics
            bill.viewCount = bill.viewCount + 1;
            bill.save();
        })
    },

    create: function (req, res) {
        var title = req.body.title,
            message = req.body.message,
            tags = req.body.tags,
            contacts = req.body.contacts;

        var bill = new Bill({ title: title, message: message, tags: tags, createdDate: new Date().getTime(), viewCount: 0, contacts: contacts });
        bill.save();
        res.send(JSON.stringify(bill));
    }
}