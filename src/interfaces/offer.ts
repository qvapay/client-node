export interface Offer {
  id: number;
  uuid: string;
  user_id: number;
  type: Type;
  coin: string;
  peer_id: number;
  amount: string;
  receive: string;
  status: Status;
  created_at: string;
  updated_at: string;
  coin_data: CoinData;
  peer: Peer;
  owner: Owner;
}

interface CoinData {
  id: number;
  coins_categories_id: number;
  name: string;
  logo: string;
  tick: string;
  fee_in: string;
  fee_out: string;
  min_in: string;
  min_out: string;
  price: string;
}

interface Owner {
  uuid: string;
  username: string;
  name: string;
  lastname: string;
  email: string;
  bio: string;
  profile_photo_path: null | string;
  profile_photo_url: string;
  complete_name: string;
  name_verified: string;
}

interface Peer {
  name: Name;
  username: Name;
  profile_photo_path: ProfilePhotoPath;
  profile_photo_url: string;
  complete_name: CompleteName;
  name_verified: Name;
}

enum CompleteName {
  QvaPay = 'QvaPay ',
}

enum Name {
  QvaPay = 'QvaPay',
}

enum ProfilePhotoPath {
  AppsQvapayPNG = 'apps/qvapay.png',
}

enum Status {
  Open = 'open',
}

enum Type {
  Buy = 'buy',
  Sell = 'sell',
}
