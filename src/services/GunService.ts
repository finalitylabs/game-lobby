declare global {
  const Gun: any;
}

class GunService {
  public connected: boolean = false;
  // private dbSalt: string = "Alice";
  private gun: any = null;
  constructor() {
    this.connected = false;
    // location.origin +
    this.gun = Gun("http://gundb-env.yyb3qd5gma.us-east-1.elasticbeanstalk.com/gun");
    //var chat = gun.get('converse/' + location.hash.slice(1));
  }
  public connect(privateKey: string, dbSalt?: string): void {
    this.gun.connect();
    this.connected = true;
  }
}

const instance = new GunService();
export default instance;
