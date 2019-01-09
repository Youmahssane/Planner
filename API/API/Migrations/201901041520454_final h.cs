namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class finalh : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Auths", "role", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Auths", "role");
        }
    }
}
