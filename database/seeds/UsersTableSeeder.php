<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO'");

        DB::table('users')->delete();

        $users = [
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('admin')
            ],
            [
                'name' => 'Daoud',
                'email' => 'daoud.ballouk@gmail.com',
                'password' => bcrypt('admin')
            ]
        ];

        DB::table('users')->insert($users);
    }
}
