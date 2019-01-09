namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mailkey : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Auths");
            AddColumn("dbo.Auths", "id", c => c.Int(nullable: false, identity: true));
            AddPrimaryKey("dbo.Auths", "id");
            DropColumn("dbo.Auths", "idAuth");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Auths", "idAuth", c => c.Int(nullable: false, identity: true));
            DropPrimaryKey("dbo.Auths");
            DropColumn("dbo.Auths", "id");
            AddPrimaryKey("dbo.Auths", "idAuth");
        }
    }
}
