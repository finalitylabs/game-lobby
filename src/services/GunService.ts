declare global {
  const Gun: any;
}

type User = any;
type Gun = any;

class GunService {
  public connected: boolean = false;
  // private dbSalt: string = "Alice";
  public user: any = null;
  private gun: any = null;
  private loggedIn: boolean = false;
  constructor() {
    this.connected = false;
    // location.origin +
    //var chat = gun.get('converse/' + location.hash.slice(1));
  }
  public connect(): void {
    console.log("GunService connecting");
    this.gun = Gun("http://gundb-env.yyb3qd5gma.us-east-1.elasticbeanstalk.com/gun");
    this.user = this.gun.user();
    this.gun.get("status").put({ connected: "true" }, (ack: any) => {
      console.log("GunService connected");
    });
    this.connected = true;
  }
  public isLoggedIn() {
    return this.loggedIn;
  }
  public get _gun(): Gun {
    return this.gun;
  }
  public get _user(): User {
    return this.user;
  }
  public async login(name: string, pw: string): Promise<User> {
    return this.user.auth("alice", "unsafepassword").then((ack: any) => {
      console.log("authorized user!");
      this.loggedIn = true;
    });
  }
  public async createUser(name: string, pw: string): Promise<User> {
    const user = this.gun.user();
    await user.create("alice", "unsafepassword").then((ack: any) => {
      console.log("done creating user!");
      this.loggedIn = true;
    });
    this.user = user;
    return this.user;
  }
}

const instance = new GunService();
export default instance;
