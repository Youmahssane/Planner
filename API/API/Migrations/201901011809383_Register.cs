namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Register : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Auths");
            CreateTable(
                "dbo.Registers",
                c => new
                    {
                        idRegister = c.Int(nullable: false, identity: true),
                        email = c.String(nullable: false),
                        fullName = c.String(nullable: false),
                        password = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.idRegister);
            
            AddColumn("dbo.Auths", "idAuth", c => c.String(nullable: false, maxLength: 128));
            AlterColumn("dbo.Auths", "email", c => c.String(nullable: false));
            AddPrimaryKey("dbo.Auths", "idAuth");
            DropColumn("dbo.Auths", "fullName");
            DropColumn("dbo.Auths", "role");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Auths", "role", c => c.Boolean(nullable: false));
            AddColumn("dbo.Auths", "fullName", c => c.String(nullable: false));
            DropPrimaryKey("dbo.Auths");
            AlterColumn("dbo.Auths", "email", c => c.String(nullable: false, maxLength: 128));
            DropColumn("dbo.Auths", "idAuth");
            DropTable("dbo.Registers");
            AddPrimaryKey("dbo.Auths", "email");
        }
    }
}
