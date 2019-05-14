const Lang = {
  init() {
    let arrLang = {
      'ua': {
        'nav_about': 'Про нас',
        'nav_friends': 'Наші друзі',
        'nav_partners': 'Наші партнери',
        'nav_social': 'Соціальна відповідальність',
        'nav_contacts': 'Соціальна відповідальність',
        /** hero section */
        'hero_description': 'Маркетингове агентство повного циклу',
        'hero_secondaryHeader_1': 'Потрібна реклама або медіапідтримка?',
        'hero_secondaryHeader_2': 'Агенція ToShoNado має саме те що вам треба!',
        /** about section */
        'about_secondaryHeader': 'Вам потрібен резонанс, інформаційний супровід або реклама? Наша команда це забезпечить! Бо ми ToShoNado Agency!',
        'about_text_1': 'ToShoNado – це молодий бренд з давньою історією успіху. З 2002 року займаємося інформаційним супроводом великого бізнесу, політичних і державних організацій в якості PR-підрозділу одного з найвпливовіших медіа-холдингів країни. З 2018 року здобули «незалежність», відкрили у Києві та Харкові офіси під брендом «ToShoNado».',
        'about_text_2': 'Ми ЄДИНЕ в Україні маркетингове агентство, яке має власний медіаресурс на 15 млн читачів щомісячно. За нашими плечима десятки успішних кейсів, досвідчені фахівці, впливові партнери та масштабні медіапроекти.',
        /** partners section */
        'partners_secondaryHeader': 'Портфоліо',
        /** social section */
        'social_secondaryHeader_1': 'Всеукраїнський проект «Екоофіс» - те, чим ми пишаємось найбільше!',
        'social_ach_tree': '800 збережених дерев',
        'social_ach_paper': '420 тонн зібраної макулатури',
        'social_ach_earth': 'Щорічна посадка дерев на День Землі',
        'social_ach_events': '2 офлайн і 2 онлайн заходи в рік',
        'social_ach_gau': 'Кращий соціальний проект 2011 року за версією Green Awards Ukraine',
        'social_secondaryHeader_1': 'Участь в ініціативі USAID «Regional monitoring and analysis for 100% of Life»',
        'social_part_prozoro': 'Моніторинг закупівель лікарських засобів через систему ProZorro',
        'social_part_coop': 'Робота над проектом в кооперації з «Сomments.ua»',
        'social_part_corrupt': 'Викриття корупційних схем в лікарнях і госпіталях на мільйони гривень',
        /** contacts section */
        'contacts_phone_kyiv': 'pr.toshonado@gmail.com (Київ)',
        'contacts_phone_kharkiv': 'toshonado.kha@gmail.com (Харків)',
        'contacts_email_kyiv': '+38 (067) 467-70-07 (Київ)',
        'contacts_email_kharkiv': '+38 (098) 378-98-98 (Харків)',
        'contacts_secondaryHeader': 'Залиште заявку і ми Вам зателефонуємо!',
        'contacts_name': 'Ваше і\'мя*',
        'contacts_name_error': 'Введіть як мінімум 2 літери',
        'contacts_phone': 'Ваш телефон*',
        'contacts_phone_error': 'Щось не так!',
        'contacts_message': 'Повідомлення',
        'contacts_message_error': 'Не менше 10 букв',
        'contacts_send': 'Надіслати',
        /** footer */
        'footer_address_kyiv': 'м. Київ, вул. Василя Яна, 3/5',
        'footer_address_kharkiv': 'м. Харків, пр. Гагаріна, 50',
      },
      'ru': {
        'nav_about': 'О нас',
        'nav_friends': 'Наши друзья',
        'nav_partners': 'Наши партнеры',
        'nav_social': 'Социальная ответственность',
        'nav_contacts': 'Контакты',
        /** hero section */
        'hero_description': 'Маркетинговое агенство полного цикла',
        'hero_secondaryHeader_1': 'Нужна реклама или медиаподдержка?',
        'hero_secondaryHeader_2': 'У нас есть для вас ToShoNado!',
        /** about section */
        'about_secondaryHeader': 'Вам нужен резонанс, информационное сопровождение или реклама? Мы это обеспечим!',
        'about_text_1': 'ToShoNado — это молодой бренд, но с давней историей успеха. С 2002 года занимаемся информационным сопровождением бизнеса, политических и государственных организаций в качестве PR-подразделения одного из крупнейших в Украине медиа-холдингов.',
        'about_text_2': 'С 2018 года обрели «независимость», открыли в Киеве и Харькове офисы под брендом «ToShoNado».  Мы — ЕДИНСТВЕННОЕ в Украине маркетинговое агентство, которое имеет собственный медиаресурс в 15 млн читателей/подпичиков в месяц. За нашими плечами десятки успешных кейсов, опытные специалисты, крупные клиенты и масштабные медиапроекты.',
        /** partners section */
        'partners_secondaryHeader': 'Портфолио',
        /** social section */
        'social_secondaryHeader_1': 'Наша гордость — всеукраинский проект «Экоофис»',
        'social_ach_tree': '800 сохраненных деревьев',
        'social_ach_paper': '420 тонн собранной макулатуры',
        'social_ach_earth': 'Ежегодная посадка деревьев на День Земли',
        'social_ach_events': '2 офлайн и 2 онлайн мероприятия в год',
        'social_ach_gau': 'Лучший социальный проект 2011 года по версии Green Awards Ukraine',
        'social_secondaryHeader_1': 'Участие в инициативе USAID «Regional monitoring and analysis for 100% of Life»',
        'social_part_prozoro': 'Мониторинг закупок лекарственных средств через систему ProZorro',
        'social_part_coop': 'Работа над проектом в кооперации  с «Сomments.ua»',
        'social_part_corrupt': 'Разоблачение коррупционных схем в больницах и госпиталях на миллионы гривен',
        /** contacts section */
        'contacts_phone_kyiv': 'pr.toshonado@gmail.com (Киев)',
        'contacts_phone_kharkiv': 'toshonado.kha@gmail.com (Харьков)',
        'contacts_email_kyiv': '+38 (067) 467-70-07 (Киев)',
        'contacts_email_kharkiv': '+38 (098) 378-98-98 (Харьков)',
        'contacts_secondaryHeader': 'Оставьте заявку и мы Вам перезвоним!',
        'contacts_name': 'Ваше имя*',
        'contacts_name_error': 'Введите как минимум 2 буквы',
        'contacts_phone': 'Ваш телефон*',
        'contacts_phone_error': 'Что-то не так!',
        'contacts_message': 'Сообщение',
        'contacts_message_error': 'Не меньше 10 букв',
        'contacts_send': 'Отправить',
        /** footer */
        'footer_address_kyiv': 'г. Киев, 01033 ул. Василия Яна 3/5',
        'footer_address_kharkiv': 'г. Харьков, пр. Гагарина, 50',
      }
    };

    $('.lang-select').change(function() {
      var lang = $(this).val();
      $('.lang').each(function(index, element) {
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  },
};

export default Lang;
