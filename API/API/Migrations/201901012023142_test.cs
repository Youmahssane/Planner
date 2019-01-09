namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class test : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Auths", "token", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Auths", "token");
        }
    }
}
