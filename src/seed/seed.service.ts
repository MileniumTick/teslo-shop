import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/seed-data';
import { User } from 'src/auth/entities/user.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly productService: ProductsService,
    private readonly authService: AuthService,
  ) {}
  async runSeed() {
    await this.deleteTables();

    const firstUser = await this.insertNewUsers();

    await this.insertNewProducts(firstUser);

    return `Seed Execute`;
  }

  private async deleteTables() {
    await this.productService.deleteAllProducts();

    await this.authService.deleteAllProducts();
  }

  private async insertNewUsers() {
    const users = initialData.users;

    const insertUsers = users.map((user) => this.authService.createUser(user));

    const [firstUser] = await Promise.all(insertUsers);

    return {
      ...firstUser,
      checkFieldsBeforeDML() {
        return true;
      },
    };
  }

  private async insertNewProducts(user: User) {
    const products = initialData.products;

    const insertProducts = products.map((product) =>
      this.productService.create(product, user),
    );

    await Promise.all(insertProducts);
  }
}
