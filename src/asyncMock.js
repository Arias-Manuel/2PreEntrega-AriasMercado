const products = [
  {
    id: "1",
    name: "God of War (PC) - Steam Key - GLOBAL",
    price: 32.74,
    category: "Aventuras",
    img: "https://images.g2a.com/1024x768/1x1x0/god-of-war-pc-steam-key-global-i10000152407005/98c4f59fc39f44aaa432445e",
    stock: 10,
    description:
      "God of War is an action video game with RPG elements, developed by Santa Monica Studio and released thanks to PlayStation PC LLC in 2022 for personal computers. It is an adaptation of the title from 2018, which was avail.",
  },
  {
    id: "2",
    name: "Grand Theft Auto V: Premium Online Edition PC - Rockstar Key - GLOBAL",
    price: 12.12,
    category: "Accion",
    img: "https://images.g2a.com/1024x768/1x1x0/grand-theft-auto-v-premium-online-edition-pc-rockstar-key-global-i10000146170004/5d14729446177c656b5211b2",
    stock: 5,
    description:
      "Experience Rockstar Games critically acclaimed open world game, Grand Theft Auto V. Grand Theft Auto V also comes with Grand Theft Auto Online, the dynamic and ever-evolving Grand Theft Auto universe with online play for up to 30 players.",
  },
  {
    id: "3",
    name: "Ready or Not (PC) - Steam Key - GLOBAL",
    price: 32.74,
    category: "Accion",
    img: "https://images.g2a.com/1024x768/1x1x0/ready-or-not-pc-steam-key-global-i10000280403002/810ebc5091ea4a7fb8eea0ac",
    stock: 11,
    description:
      "Ready or Not is a realistic tactical first-person shooter video game developed and released by Void Interactive in 2021 (early access). It is your chance to discover the secrets of the work of the professional SWAT unit and help suppress riots and the actions of the most dangerous criminals.",
  },
  {
    id: "4",
    name: "The Elder Scrolls V: Skyrim Anniversary Edition (PC) - Steam Key - GLOBAL",
    price: 27.24,
    category: "RPG",
    img: "https://images.g2a.com/1024x768/1x1x0/the-elder-scrolls-v-skyrim-anniversary-edition-pc-steam-key-global-i10000277168002/008861f126b04ff49dd77483",
    stock: 100,
    description:
      "Skyrim Anniversary Edition extends the fun the game provides by adding several new pieces of downloadable content including new quests, dungeons, bosses, weapons, spells and more. The pack includes both Skyrim Special Edition as well as an Anniversary upgrade so you can begin your epic journey not missing out on anything.",
  },
  {
    id: "5",
    name: "Elden Ring (PC) - Steam Account - GLOBAL",
    price: 53.39,
    category: "RPG",
    img: "https://images.g2a.com/1024x768/1x1x0/elden-ring-pc-steam-account-global-i10000273674023/d5bf6f91240e45aaa1ea1201",
    stock: 8,
    description:
      "Elden Ring is a dark fantasy RPG developed by FromSoftware and published thanks to Bandai Namco Entertainment. It is an epic and challenging adventure created by the developers of Demons Souls in collaboration with the author of A Song of Ice and Fire series - R. R. Martin. Discover the secrets of the Lands Between and embark on the most heroic mission to discover the purpose of the magical artifact and your destiny. Elden Ring release is set for 2022.",
  },
  {
    id: "6",
    name: "Horizon Zero Dawn | Complete Edition (PC) - Steam Key - GLOBAL",
    price: 18.37,
    category: "Aventuras",
    img: "https://images.g2a.com/1024x768/1x1x0/horizon-zero-dawn-complete-edition-pc-steam-key-global-i10000145208006/5f02c6a57e696c6f690471f2",
    stock: 25,
    description:
      "A unique gaming experience that puts you in the role of a post-apocalyptic robo-animals hunter, Aloy, who sets out on the quest to uncover her own past and prevent an even worse future to happen.",
  },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        categoryId
          ? products.filter((prod) => prod.category === categoryId)
          : products
      );
    }, 2000);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 2000);
  });
};
