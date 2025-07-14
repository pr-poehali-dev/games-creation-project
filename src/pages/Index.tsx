import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const popularGames = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      genre: "RPG",
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop",
      price: "2990₽",
      discount: "-30%"
    },
    {
      id: 2,
      title: "The Witcher 3",
      genre: "RPG",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop",
      price: "1490₽",
      discount: "-50%"
    },
    {
      id: 3,
      title: "Valorant",
      genre: "FPS",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
      price: "Бесплатно",
      discount: null
    },
    {
      id: 4,
      title: "Elden Ring",
      genre: "Souls-like",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=400&h=225&fit=crop",
      price: "3990₽",
      discount: "-20%"
    }
  ];

  const newsItems = [
    {
      id: 1,
      title: "Новый турнир по Valorant с призовым фондом 100,000₽",
      date: "14 июля 2025",
      category: "Турниры"
    },
    {
      id: 2,
      title: "Обновление 2.5 для Cyberpunk 2077 уже доступно",
      date: "13 июля 2025",
      category: "Новости"
    },
    {
      id: 3,
      title: "Топ-10 игр июля: что стоит попробовать",
      date: "12 июля 2025",
      category: "Обзоры"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-orange-500">GAMING HUB</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-orange-500 transition-colors">Главная</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Каталог</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Новости</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Сообщество</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Icon name="Search" size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Icon name="User" size={18} />
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700">Войти</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/img/3868c417-d6f2-40fc-8e4f-f79f95d2cea8.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center animate-fade-in">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            GAMING HUB
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Твоё игровое сообщество. Обзоры, новости, турниры и общение с единомышленниками.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-8 py-3">
              <Icon name="Users" size={20} className="mr-2" />
              Присоединиться к сообществу
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-up">
              <div className="text-3xl font-bold text-orange-500 mb-2">50K+</div>
              <div className="text-gray-400">Игроков</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-gray-400">Игр в каталоге</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-gray-400">Турниров</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-gray-400">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-4xl font-bold">Популярные игры</h3>
            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              Смотреть все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGames.map((game, index) => (
              <Card key={game.id} className="bg-gray-900 border-gray-700 hover:border-orange-500 transition-all duration-300 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {game.discount && (
                    <Badge className="absolute top-2 right-2 bg-red-600 text-white">
                      {game.discount}
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                      {game.genre}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-400">{game.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-orange-500 transition-colors">
                    {game.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-orange-500">{game.price}</div>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-center">Последние новости</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((news, index) => (
              <Card key={news.id} className="bg-gray-800 border-gray-700 hover:border-orange-500 transition-all duration-300 group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-orange-600/20 text-orange-500 border border-orange-500/30">
                      {news.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{news.date}</span>
                  </div>
                  <CardTitle className="text-white group-hover:text-orange-500 transition-colors">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto text-orange-500 hover:text-orange-400">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Присоединяйся к сообществу</h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Общайся с игроками, участвуй в турнирах и делись своими достижениями
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-scale-in">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/30 transition-colors">
                <Icon name="MessageCircle" size={32} className="text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Форумы</h4>
              <p className="text-gray-400">Обсуждай игры и стратегии с другими игроками</p>
            </div>
            <div className="text-center group animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/30 transition-colors">
                <Icon name="Trophy" size={32} className="text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Турниры</h4>
              <p className="text-gray-400">Участвуй в соревнованиях и выигрывай призы</p>
            </div>
            <div className="text-center group animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/30 transition-colors">
                <Icon name="Users" size={32} className="text-orange-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Команды</h4>
              <p className="text-gray-400">Создавай команды и играй с друзьями</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-xl font-bold text-orange-500 mb-4">GAMING HUB</h5>
              <p className="text-gray-400 mb-4">Твоё игровое сообщество для открытий, общения и побед.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-500">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-500">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-orange-500">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Игры</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Хиты</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Бесплатные</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Скидки</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Сообщество</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Форумы</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Команды</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Discord</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Поддержка</h6>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Gaming Hub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;