namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Emailkey : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Auths");
            AlterColumn("dbo.Auths", "email", c => c.String(nullable: false, maxLength: 128));
            AddPrimaryKey("dbo.Auths", "email");
            DropColumn("dbo.Auths", "id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Auths", "id", c => c.Int(nullable: false, identity: true));
            DropPrimaryKey("dbo.Auths");
            AlterColumn("dbo.Auths", "email", c => c.String(nullable: false));
            AddPrimaryKey("dbo.Auths", "id");
        }
    }
}
