declare global {
  const Gun: any;
  const _: any;
}

type User = any;
type Gun = any;

class GunService {
  public connected: boolean = false;
  public user: any = null;
  private gun: any = null;
  private loggedIn: boolean = false;

  // param gun: allow passing an existing Gun connection optionally
  constructor(gun?: any) {
    this.connected = false;
    if (gun) {
      this.gun = gun;
      this.connected = true;
      this.user = this.gun.user();
    }
    // location.origin +
    //var chat = gun.get('converse/' + location.hash.slice(1));
  }
  public connect(url?: string): void {
    if (this.gun) return;
    const path = url || "http://gundb-env.yyb3qd5gma.us-east-1.elasticbeanstalk.com/gun";
    console.log("GunService connecting to " + path);
    this.gun = Gun(path);
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
