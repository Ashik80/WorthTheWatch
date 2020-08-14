using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ReleasedMovie",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Genre = table.Column<string>(nullable: true),
                    ThumbNail = table.Column<string>(nullable: true),
                    PgRating = table.Column<string>(nullable: true),
                    Duration = table.Column<string>(nullable: true),
                    ReleaseInfo = table.Column<DateTime>(nullable: false),
                    TrailerUrl = table.Column<string>(nullable: true),
                    Rating = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReleasedMovie", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UnreleasedMovie",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Genre = table.Column<string>(nullable: true),
                    ThumbNail = table.Column<string>(nullable: true),
                    PgRating = table.Column<string>(nullable: true),
                    Duration = table.Column<string>(nullable: true),
                    ReleaseInfo = table.Column<DateTime>(nullable: false),
                    TrailerUrl = table.Column<string>(nullable: true),
                    DisplayImage = table.Column<string>(nullable: true),
                    News = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UnreleasedMovie", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ReleasedMovie");

            migrationBuilder.DropTable(
                name: "UnreleasedMovie");
        }
    }
}
