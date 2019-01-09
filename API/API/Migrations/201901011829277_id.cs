namespace API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class id : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Auths");
          
            AddPrimaryKey("dbo.Auths", "idAuth");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Auths");
            AlterColumn("dbo.Auths", "idAuth", c => c.String(nullable: false, maxLength: 128));
            AddPrimaryKey("dbo.Auths", "idAuth");
        }
    }
}
