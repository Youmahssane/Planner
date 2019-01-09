namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class finlmirto : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Vols", "heureDepart", c => c.String());
            AddColumn("dbo.Vols", "heureArr", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Vols", "heureArr");
            DropColumn("dbo.Vols", "heureDepart");
        }
    }
}
