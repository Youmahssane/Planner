namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class notoken : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Auths", "token");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Auths", "token", c => c.String());
        }
    }
}
